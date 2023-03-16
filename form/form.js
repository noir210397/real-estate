const password = document.querySelector("#password")
const passwordSpan = document.querySelector("#password-span")
const home = document.querySelector(".home")
passwordSpan.addEventListener("click", () => {
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text")
        passwordSpan.classList.add('grey')
    }
    else {
        password.setAttribute('type', "password")
        passwordSpan.classList.remove('grey')
    }
})
home.addEventListener('click', () => {
    window.location.href = "../index.html"
    // window.location.replace("./form/index.html")
})
const deals = document.querySelector('.deals')
deals.addEventListener('click', () => {
    // window.location.href="./form/index.html"
    window.location.href = "../deals/deals.html"
})