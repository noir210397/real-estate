const line = document.querySelector(".line")
const button = document.querySelector("button")
const allButtons = document.querySelectorAll(".buttons1")
const width = button.clientWidth
const rent = document.querySelector(".rent")
const sale = document.querySelector(".sale")
// const slideArray=[...slide.children]
const rentTab = document.querySelector('.for-rent')
const saleTab = document.querySelector('.for-sale')
// slideArray.forEach((item,index)=>{
// item.style.left=`${index*slideWidth}px`
// })
line.style.maxWidth = width + "px"
allButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let active = document.querySelector(".active")
        active.classList.remove("active")
        button.classList.add("active")
        line.style.transform = `translateX(${index * width}px)`
    })
})
rent.addEventListener('click', () => {
    document.querySelector('.for-rent').style.display = "block"
    document.querySelector('.for-sale').style.display = "none"
})
sale.addEventListener('click', () => {
    document.querySelector('.for-sale').style.display = "block"
    document.querySelector('.for-rent').style.display = "none"
    const port = document.querySelector("#port")
    // console.log(port)
    const portWidth = port.clientWidth
    const portArray = [...port.children]
    portArray.forEach((item, index) => {
        item.style.left = `${portWidth * index}px`
    })

})
//rendering
const all = [
    {
        image1: '../assets/for-rent/pexels-jean-van-der-meulen-1457842.jpg',
        image2: '../assets/for-rent/pexels-martin-péchy-1866149.jpg',
        image3: "../assets/for-rent/pexels-max-rahubovskiy-6434622.jpg",
        id: "asokoro",
        location: "Asokoro, abuja, nigeria",
        price: "69,000",
        bedRoom: "2",
        bathRoom: "3",
        link: "The Golden Blue Two Bedroom Apartment",
        weblink: "../pages/asokoro/asokoro.html"
    },
    {
        image1: '../assets/for-rent/pexels-medhat-ayad-439227.jpg',
        image2: '../assets/for-rent/pexels-pixabay-271816.jpg',
        image3: "../assets/for-rent/pexels-pixabay-462235.jpg",
        id: "lifecamp",
        location: "lifecamp, abuja, nigeria",
        price: "78,000",
        bedRoom: "1",
        bathRoom: "2",
        link: "KayZHome Condo",
        weblink: "../pages/lifecamp/lifecamp.html"
    },
    {
        image1: '../assets/for-rent/pexels-pixabay-534172.jpg',
        image2: '../assets/for-rent/pexels-vecislavas-popa-1571459.jpg',
        image3: "../assets/for-rent/pexels-vecislavas-popa-1643383.jpg",
        id: "gombe",
        location: "gombe state, nigeria",
        price: "77,000",
        bedRoom: "1",
        bathRoom: "1",
        link: "One Bedroom Condo",
        weblink: "..../pages/gombe/gombe.html"
    },
    {
        image1: '../assets/for-rent/pexels-victoria-akvarel-1648771.jpg',
        image2: '../assets/for-rent/2nd/alejandra-cifre-gonzalez-5nYLmG1m5lw-unsplash.jpg',
        image3: "../assets/for-rent/2nd/dillon-kydd-2keCPb73aQY-unsplash.jpg",
        id: "Jabi",
        location: "Jabi, abuja, nigeria",
        price: "77,000",
        bedRoom: "1",
        bathRoom: "1",
        link: "Smart Studio Casa Apt. By Covina",
        weblink: "../pages/jabi/jabi.html"
    },
    {
        image1: '../assets/for-rent/2nd/dillon-kydd-XGvwt544g8k-unsplash.jpg',
        image2: '../assets/for-rent/2nd/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
        image3: "../assets/for-rent/2nd/pexels-jason-boyd-3209045.jpg",
        id: "maitama",
        location: "maitama, abuja, nigeria",
        price: "65,000",
        bedRoom: "1",
        bathRoom: "1",
        link: "Cozy 1bedroom apartment with fitted kitchenette",
        weblink: "../pages/maitama/maitama.html"
    },
    {
        image1: '../assets/for-rent/2nd/pexels-lina-kivaka-3625713.jpg',
        image2: '../assets/for-rent/2nd/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
        image3: "../assets/for-rent/2nd/r-architecture-wDDfbanbhl8-unsplash.jpg",
        id: "wuse",
        location: "wuse, abuja, nigeria",
        price: "58,000",
        bedRoom: "1",
        bathRoom: "1",
        link: "Casa Apt. By Covina. Maitre Studio",
        weblink: "../pages/wuse/wuse.html"
    }
]
// let shop = ''
// all.forEach(item => {
//     let { image1, image2, image3, id, location, price, bedRoom, bathRoom, link, weblink } = item
//     shop += `<div class="carousel-card">
//     <div class="carousel-wrapper">
//         <button class="prev" id="prev-${id}"></button>
//         <button class="next" id="next-${id}"></button>
//         <div class="slide1" id="${id}">
//             <img src="${image1}" alt="" class="first-image current-${id}">
//             <img src="${image2}" alt="" class="second-image">
//             <img src="${image3}" alt="" class="third-image">
//         </div>
//     </div>
//     <div class="text-part">
//         <div class="contain-text">
//             <p class="font gray-text"><span><i class="fa-solid fa-location-dot"></i></span> ${location}</p>
//         <h2><a href="${weblink}">${link}</a></h2>
//         <p class="price font"><a href=""><span><i class="fa-solid fa-naira-sign"></i></span>${price} / Night</a></p>
//         <p class="font"><a href="" class="gray-text"><span><i class="fa-solid fa-bed"></i> ${bedRoom} Bedrooms </span><span><i class="fa-solid fa-bath"></i> ${bathRoom} bathrooms</span></a></p>
//         </div>

//     </div>
// </div>`
// })





const __all = all.map((i) => createCard(i))


function createCard(args) {

    return `<div class="carousel-card">
<div class="carousel-wrapper">
    <button class="prev" id="prev-${args.id}"></button>
    <button class="next" id="next-${args.id}"></button>
    <div class="slide1" id="${args.id}">
        <img src="${args.image1}" alt="" class="first-image current-${args.id}">
        <img src="${args.image2}" alt="" class="second-image">
        <img src="${args.image3}" alt="" class="third-image">
    </div>
</div>
<div class="text-part">
    <div class="contain-text">
        <p class="font gray-text"><span><i class="fa-solid fa-location-dot"></i></span> ${args.location}</p>
    <h2><a href="${args.weblink}">${args.link}</a></h2>
    <p class="price font"><a href="${args.weblink}"><span><i class="fa-solid fa-naira-sign"></i></span>${args.price} / Night</a></p>
    <p class="font"><a href="${args.weblink}" class="gray-text"><span><i class="fa-solid fa-bed"></i> ${args.bedRoom} Bedrooms </span><span><i class="fa-solid fa-bath"></i> ${args.bathRoom} bathrooms</span></a></p>
    </div>
    
</div>
</div>`
}

rentTab.innerHTML = __all.join("")
const firstImages = document.querySelectorAll(".first-image")
const secondImages = document.querySelectorAll(".second-image")
const thirdImages = document.querySelectorAll(".third-image")
const slide = document.querySelector(".slide1")
const slideWidth = slide.clientWidth
firstImages.forEach(item => {
    item.style.left = 0 + "px"
})
secondImages.forEach(item => {
    item.style.left = `${slideWidth}px`
})
thirdImages.forEach(item => {
    item.style.left = `${slideWidth * 2}px`
})
const allPrevious = [...document.querySelectorAll(".prev")]
const allNext = [...document.querySelectorAll(".next")]
allPrevious.forEach(item => {
    let x = item.id
    item.addEventListener('click', () => {
        carouselBackward(x)
    })
})
allNext.forEach(item => {
    let x = item.id
    item.addEventListener('click', () => {
        carouselForward(x)
    })
})
let carouselForward = (id) => {
    let realId = id.replace("next-", "")
    let slide = document.querySelector(`#${realId}`)
    let mainSlide = document.querySelector(`.current-${realId}`)
    let nextSlide = mainSlide.nextElementSibling
    // console.log(nextSlide)
    let sliding = () => {
        if (nextSlide === null || mainSlide === null) {
            return
        }
        else {
            slide.style.transform = `translateX(-${nextSlide.style.left})`
            mainSlide.classList.remove(`current-${realId}`)
            nextSlide.classList.add(`current-${realId}`)
        }
    }
    sliding()
}
let carouselBackward = (id) => {
    let realId = id.replace("prev-", "")
    let slide = document.querySelector(`#${realId}`)
    let mainSlide = document.querySelector(`.current-${realId}`)
    let prevSlide = mainSlide.previousElementSibling
    // console.log(nextSlide)
    let sliding = () => {
        if (prevSlide === null || mainSlide === null) {
            return
        }
        else {
            slide.style.transform = `translateX(-${prevSlide.style.left})`
            mainSlide.classList.remove(`current-${realId}`)
            prevSlide.classList.add(`current-${realId}`)
        }
    }
    sliding()
}

const profile = document.querySelector('.profile')
profile.addEventListener('click', () => {
    // window.location.href="./form/index.html"
    window.location.replace("../form/index.html")
})
const home = document.querySelector('.home')
home.addEventListener('click', () => {
    window.location.href = "../index.html"
    // window.location.replace("./form/index.html")
})