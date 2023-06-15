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
        
    }
};
skill.generateList(document.querySelector("dl.skill-list"));

sortBtnBlock = document.querySelector("div.skills-sort");

sortBtnBlock.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if (target.nodeName === "BUTTON"){
        if (skill.isSorted !== target.dataset.type){
            switch (target.dataset.type){
                case 'name':
                    sortByName(skill); break;
                case 'level':
                    sortByLevel(skill); break;
                default:
                    return;
            }
            skill.isSorted = target.dataset.type;
        } else {
            skill.data.reverse();
        }
        skill.generateList(document.querySelector("dl.skill-list")); 
    } 
});

function sortByName(s){
    s.data.sort((a,b) => a.item.localeCompare(b.item));
};

function sortByLevel(s){
    s.data.sort((a,b) => b.level - a.level); 
};


