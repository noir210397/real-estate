// 1st carousel
const slide=document.querySelector('.slide')
const width=document.querySelector(".carousel-wrapper").clientWidth
const slideArray=[...slide.children]
const prevBtn=document.querySelector('.prevbtn')
const nextBtn=document.querySelector('.nextbtn')
slideArray.forEach((item,index)=>{
    item.style.left=(index*width)+'px'
})
prevBtn.addEventListener('click',()=>{
    let currentSlide=document.querySelector('.current-slide')
    let prevSlide=currentSlide.previousElementSibling
    let px=prevSlide.style.left
    currentSlide.classList.remove("current-slide")
    prevSlide.classList.add("current-slide")
    slide.style.transform=`translateX(-${px})`

})
nextBtn.addEventListener('click',()=>{
    let currentSlide=document.querySelector('.current-slide')
    let nextSlide=currentSlide.nextElementSibling
    let px=nextSlide.style.left
    currentSlide.classList.remove("current-slide")
    nextSlide.classList.add("current-slide")
    slide.style.transform=`translateX(-${px})`
    
})
// grid caurousel 1
const gridCarousel1=document.querySelector(".slide1")
const gridCarouselArray1=[...gridCarousel1.children]
const gridCarouselWidth1=gridCarousel1.clientWidth
const gridCarouselPrevButton1=document.querySelector(".carousel1-prev")
const gridCarouselNextButton1=document.querySelector('.carousel1-next')
// console.log(gridCarouselWidth1)
gridCarouselArray1.forEach((item,index)=>{
    item.style.left=(index*gridCarouselWidth1)+'px'
})
gridCarouselNextButton1.addEventListener("click",()=>{
    let currentSlide1=document.querySelector('.current-img')
    let nextSlide1=currentSlide1.nextElementSibling
    let px1=nextSlide1.style.left
    currentSlide1.classList.remove("current-img")
    nextSlide1.classList.add("current-img")
    gridCarousel1.style.transform=`translateX(-${px1})`
})
gridCarouselPrevButton1.addEventListener("click",()=>{
    let currentSlide1=document.querySelector('.current-img')
    let prevSlide1=currentSlide1.previousElementSibling
    let px1=prevSlide1.style.left
    currentSlide1.classList.remove("current-img")
    prevSlide1.classList.add("current-img")
    gridCarousel1.style.transform=`translateX(-${px1})`
})
// second grid carousel
const gridCarousel2=document.querySelector(".slide2")
const gridCarouselArray2=[...gridCarousel2.children]
const gridCarouselWidth2=gridCarousel2.clientWidth
const gridCarouselPrevButton2=document.querySelector(".carousel2-prev")
const gridCarouselNextButton2=document.querySelector('.carousel2-next')
console.log(gridCarouselWidth2)
gridCarouselArray2.forEach((item,index)=>{
    item.style.left=(index*gridCarouselWidth2)+'px'
})
gridCarouselNextButton2.addEventListener("click",()=>{
    let currentSlide2=document.querySelector('.current-img2')
    let nextSlide2=currentSlide2.nextElementSibling
    let px2=nextSlide2.style.left
    currentSlide2.classList.remove("current-img2")
    nextSlide2.classList.add("current-img2")
    gridCarousel2.style.transform=`translateX(-${px2})`
})
gridCarouselPrevButton2.addEventListener("click",()=>{
    let currentSlide2=document.querySelector('.current-img2')
    let prevSlide2=currentSlide2.previousElementSibling
    let px2=prevSlide2.style.left
    currentSlide2.classList.remove("current-img2")
    prevSlide2.classList.add("current-img2")
    gridCarousel2.style.transform=`translateX(-${px2})`
})
let counter=0
let animateSlide=()=>{
    if(counter>=8){
        slide.style.transition="1s ease-in-out"
        slide.style.transform="translateX(0px)"
        counter=0
    }
    else{
        slide.style.transition="1s ease-in-out"
        slide.style.transform=`translateX(${-width*counter}px)`
        counter++
    }
}
setInterval(animateSlide,2000)