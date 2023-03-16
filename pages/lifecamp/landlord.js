let msg = document.querySelector("#msg")
const home = document.querySelector(".home")
const deals = document.querySelector('.deals')
const profile = document.querySelector('.profile')
const backButton = document.querySelector(".back-button")
msg.addEventListener("click", () => {
    let text = document.querySelector("#text").value

    window.location.href = `mailto:email@example.com?subject=KayzHome Condo&body=${text}`
})
home.addEventListener('click', () => {
    window.location.href = "../../index.html"
})
deals.addEventListener('click', () => {
    window.location.href = "../../deals/deals.html"
})
profile.addEventListener('click', () => {
    window.location.href = "../../form/index.html"
})
backButton.addEventListener('click', () => {
    window.location.href = "./lifecamp.html"
})