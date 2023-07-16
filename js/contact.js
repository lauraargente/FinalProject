'use strict'

// Variables 
const headerBurguer = document.querySelector('.Header-burguer')
const headerNav = document.querySelector('.Header-nav')
const main = document.querySelector('.Main')
const footer = document.querySelector('.Footer')
const cursor= document.querySelector('.Main-cursor')
const headerLi = document.querySelectorAll('.Header-li')
const formButton = document.querySelector('.Form-button')
const formFields = document.querySelectorAll('.Field') 
const lightBox = document.querySelector('.Lightbox')
const lightBoxClose = document.querySelector('.Lightbox-close')
const lightBoxBg = document.querySelector('.Lightbox-bg')


// Funciones
    // closeLightBox es una función para cerrar el popup (lightbox)
let closeLightBox = ()=>{
    lightBox.classList.remove('isActive')
    
    formFields.forEach((eachField, i) => {
        eachField.value = '';
    });
}


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
    // en Local Storage a la variable previousPage le pongo el valor contact

    headerLi[1].addEventListener('click', ()=>{
        localStorage.setItem('previousPage', 'contact');
    }) 


// Cuando hago CLICK en formButton hace una FUNCTION
    // CUANDO los formFields están completos a Lightbox le Add la clase is Active 

    formButton.addEventListener('click', ()=>{
        let fieldValues = [];
        
        formFields.forEach((eachField, i) => {
            fieldValues.push(eachField.value);
            if(eachField.value == ''){
                formFields[i].classList.add('Form-error')
            } else {
                formFields[i].classList.remove('Form-error')
            }
        });
        
        if(!fieldValues.includes('')){
            lightBox.classList.add('isActive')
        }
    })

    
// Cuando hago CLICK en lightboxClose hace una FUNCTION
    // a Lightbox le remove la clase is Active --> Es decir llamamos a la función closeLightBox

lightBoxClose.addEventListener('click', closeLightBox)

// Cuando hago CLICK en lightBoxBg hace una FUNCTION
    // a Lightbox le remove la clase is Active --> Es decir llamamos a la función closeLightBox
lightBoxBg.addEventListener('click', closeLightBox)




