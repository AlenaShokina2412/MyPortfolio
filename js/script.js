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

    generateList : function(parentElement) {
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
    }
};
skill.generateList(document.querySelector("dl.skill-list"));

sortBtnBlock = document.querySelector("div.skills-sort");

sortBtnBlock.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if (target.nodeName === "BUTTON"){
        console.log(target);
    } 
});

