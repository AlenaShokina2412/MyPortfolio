const skill = {
    data : [
        {
            item: "html",
            level: 50,
            iconPath: "img/html.svg",
        },
        {
            item: "css",
            level: 50,
            iconPath: "img/css.svg",
        },
        {
            item: "figma",
            level: 50,
            iconPath: "img/figma.svg",
        },
        {
            item: "C++",
            level: 70,
            iconPath: "img/c++.svg",
        },
        {
            item: "java",
            level: 70,
            iconPath: "img/java.svg",
        },
        {
            item: "1С",
            level: 100,
            iconPath: "img/1c.svg",
        }
    ],
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
    }
};
skill.generateList(document.querySelector("dl.skill-list"));

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