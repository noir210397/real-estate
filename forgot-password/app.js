const email=document.querySelector("#email-address")
const form=document.querySelector('.form')
const hidden=document.querySelector(".hidden")
const cancel=document.querySelector(".fa-xmark")
const home=document.querySelector(".home")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    hidden.style.display="block" 
})
let displayNone=()=>{
    hidden.style.display="none"
}
cancel.addEventListener('click',()=>{
    hidden.style.display="none"
})
setInterval(displayNone,6000) 
home.addEventListener('click',()=>{
    window.location.href="/index.html"
    // window.location.replace("./form/index.html")
})
const deals=document.querySelector('.deals')
deals.addEventListener('click',()=>{
    // window.location.href="./form/index.html"
    window.location.replace("/deals/deals.html")
})