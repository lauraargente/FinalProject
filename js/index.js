'use strict'

// Variables
const headerBurguer = document.querySelector('.Header-burguer')
const headerNav = document.querySelector('.Header-nav')
const main = document.querySelector('.Main')
const footer = document.querySelector('.Footer')
const cursor= document.querySelector('.Main-cursor')
const headerLi = document.querySelectorAll('.Header-li')

console.log(headerBurguer)
console.log(headerNav)
console.log(main)
console.log(footer)
console.log(cursor)
console.log(headerLi)



//Cuando cargo la página recojo del Local Storage la pagina que he visitado anteriormente
    // reseteo la variable con la página actual

let previousPage = localStorage.getItem('previousPage');
if (previousPage == 'about' || previousPage == 'contact' || previousPage == 'samana') {
    const element = document.getElementById("Section-work");
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth'})
    }, 1000);
}
localStorage.setItem('previousPage', 'home');


//Cuando hago CLICK en headerBurguer hace una FUNCTION
    // a headerNav le TOGGLE la clase isActive
   
    headerBurguer.addEventListener(`click`, ()=>{
        headerNav.classList.toggle('isActive')
    })
    
// Cuando cursor se desplaza/mueve hace una FUNCTION
     // del objeto e transforamos las propiedade translateX y translateY
    
    window.addEventListener('mousemove', (e)=>{
        let {clientX, clientY}=e
    
        cursor.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`
        let cursorStyle = window.getComputedStyle(e.target)["cursor"]
        
        const textArray = ['SPAN','P','H2','H3','H4','H5']
        
        if(textArray.includes(e.target.tagName) || cursorStyle === "pointer"){
            cursor.classList.add('hide')
            main.classList.add('cursor-text')
            footer.classList.add('cursor-text')
        }
        else{
            cursor.classList.remove('hide')
            main.classList.remove('cursor-text')
            footer.classList.remove('cursor-text')
        }
    
    })


// Cuando hago CLICK en Recent Work hace una FUNCTION
    // aheaderNav le REMOVE la clase isActive

    headerLi[1].addEventListener('click', ()=>{
        headerNav.classList.remove('isActive')
    })




