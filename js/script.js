const skill = {
    data: [],
    isSorted: false,
    generateList : function(parentElement) {
        parentElement.innerHTML = '';
        this.data.forEach(element => {
            
            const Dta = document.createElement('dt');
            const Dda = document.createElement('dd');
            const Diva = document.createElement('div');
        
            Dta.classList.add('skill-item');
            Dda.classList.add('skill-level');
        
        
            Dta.textContent = element.item;
            Diva.textContent = `${element.level}%`;
        
            Diva.style.width = `${element.level}%`;
        
            Dta.style.backgroundImage = `url(${element.iconPath})`;
        
            
        
            parentElement.append(Dta,Dda);
        
            Dda.appendChild(Diva);
            
        });
    },

    sortList: function(sortingType) {
        if (this.isSorted !== sortingType){
            switch (sortingType){
                case 'name':
                    sortByName(this); break;
                case 'level':
                    sortByLevel(this); break;
                default:
                    return;
            }
            this.isSorted = sortingType;
        } else {
            this.data.reverse();
        }
        this.generateList(document.querySelector("dl.skill-list")); 
    },
    initList: function(url,parentElement,skillSection){
        fetch(url)
        .then(data => data.json())
        .then(object =>{
            this.data = object;
            this.generateList(parentElement);
        })
        .catch(()=>{
            console.error('что-то пошло не так');
            skillSection.remove(); 
        })
    }
};


const skillList = document.querySelector("dl.skill-list");

const skillsРartition = document.querySelector('section.skills');
skill.initList('db/skills.json', skillList, skillsРartition);




sortBtnBlock = document.querySelector("div.skills-sort");

sortBtnBlock.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if (target.nodeName === "BUTTON"){
       skill.sortList(target.dataset.type) 
    } 
});

function sortByName(s){
    s.data.sort((a,b) => a.item.localeCompare(b.item));
};

function sortByLevel(s){
    s.data.sort((a,b) => b.level - a.level); 
};

const nav = document.querySelector('.main-nav');
const btn = document.querySelector('.nav-btn');

const menu = {
    open: function() {
        nav.classList.remove('main-nav_closed');
        btn.classList.add('nav-btn_close');
        btn.classList.remove('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    },
    close: function() {
        nav.classList.add('main-nav_closed');
        btn.classList.remove('nav-btn_close');
        btn.classList.add('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },
};

btn.addEventListener('click', (e) => {
    e.target.classList.contains('nav-btn_open') ? menu.open() : menu.close();
});


menu.close();

const checkbox = document.querySelector(".switch-checkbox");
checkbox.addEventListener("change", () => {
    changeTheme(checkbox.checked);
});


const changeTheme = (theme) => {
    if (theme){
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
    localStorage.setItem('light-dark-mode-notes', theme);
}

const lightDarkMode = localStorage.getItem('light-dark-mode-notes');

if (lightDarkMode === null || lightDarkMode === "false") {
    changeTheme(false);
    checkbox.checked = false;
} else {
    changeTheme(true);
    checkbox.checked = true;
}