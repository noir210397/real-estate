const images=document.querySelectorAll(".images")
const width=images[0].clientWidth
const carouselButtons=document.querySelectorAll(".carousel-buttons")
const slide=document.querySelector(".slide")
images.forEach((item,index)=>{
    item.style.left=`${width*index}px`
})
let slider=(x,id)=>{
    let realid=document.querySelector(`#${id}`)
    let buttonStyle=document.querySelector(`.opacity`)
    slide.style.transform=`translateX(-${x*width}px)`
    buttonStyle.classList.remove("opacity")
    realid.classList.add("opacity")
}
carouselButtons.forEach((item,index)=>{
    let id=item.id
    item.addEventListener('click',()=>{
        slider(index,id)
    })
})
