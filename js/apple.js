'use strict'

let sliderActive = 0

const sliderCenter= document.querySelectorAll('.Slider-center')
console.log(sliderCenter)

const sliderPoint= document.querySelectorAll('.Slider-li')
console.log(sliderPoint)

const sliderCenterImg= document.querySelectorAll('.Slider-center-img')
console.log(sliderCenterImg)

const sliderNextImg = document.querySelector('.Slider-next-img')
console.log(sliderNextImg)
console.log(sliderNextImg.src)

const sliderPrevImg = document.querySelector('.Slider-prev-img')
console.log(sliderPrevImg)

// Cuando pasan 3 segundos, sliderActive aumenta para mostrar la siguiente imagen
    // sliderActive ++
    // a TODAS las sliderCenter le REMOVE la clase isActive
    // a sliderCenter con POSICION sliderActive le ADD la clase isActive 

    // a TODAS las sliderPoint les REMOVE la clase isActive
    // a sliderPoint con POSICION sliderActive le ADD la clase isActive 

    // Cuando pasan 3 segundos, sliderNextImg aparece 
    // el atributo src de sliderNextImg tiene que ser el mismo que el de sliderCenter


let startSlider = () => {
    sliderActive++
    if(sliderActive >= sliderCenter.length){
        sliderActive = 0
    }
    sliderCenter.forEach((eachImg, index) =>{
        sliderCenter[index].classList.remove('isActive')
        sliderCenter[sliderActive].classList.add('isActive')

        sliderPoint[index].classList.remove('isActive')
        sliderPoint[sliderActive].classList.add('isActive')
    })

    let nextImgIndex = sliderActive + 1
    if (nextImgIndex >= sliderCenter.length){
        nextImgIndex = 0 
    }
    sliderNextImg.src = sliderCenterImg[nextImgIndex].src

    let prevImgIndex = sliderActive - 1
    if(prevImgIndex < 0){
        prevImgIndex = sliderCenter.length - 1
    }
    sliderPrevImg.src = sliderCenterImg[prevImgIndex].src
}

let sliderInterval = setInterval(startSlider, 3000)




// Cuando hago CLICK en FOR EACH sliderPoint hace una FUNCTION
    // a TODAS las sliderCenter le REMOVE la clase isActive
    // a sliderCenter con POSICION sliderActive le ADD la clase isActive 

    // a TODAS las sliderPoint les REMOVE la clase isActive
    // a sliderPoint con POSICION sliderActive le ADD la clase isActive 

sliderPoint.forEach((eachPoint, indexPoint) =>{
    sliderPoint[indexPoint].addEventListener('click', ()=>{
        sliderCenter.forEach((eachImg, indexImg)=>{
            sliderCenter[indexImg].classList.remove('isActive')
            sliderPoint[indexImg].classList.remove('isActive')

        })

        sliderCenter[indexPoint].classList.add('isActive')
        sliderPoint[indexPoint].classList.add('isActive')

        let nextImgIndex = indexPoint + 1
        if (nextImgIndex >= sliderCenter.length){
            nextImgIndex = 0 
        }
        sliderNextImg.src = sliderCenterImg[nextImgIndex].src

        let prevImgIndex = indexPoint - 1
        if(prevImgIndex < 0){
            prevImgIndex = sliderCenter.length - 1
        }
        sliderPrevImg.src = sliderCenterImg[prevImgIndex].src
        
        sliderActive = indexPoint
        clearInterval(sliderInterval)
        sliderInterval = setInterval(startSlider, 3000)
    })
})





