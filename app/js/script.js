
const btnHamburger = document.querySelector("#btnHamburger")
const overlaySection = document.querySelector("#overlayId")

btnHamburger.addEventListener("click", function () {
    btnHamburger.classList.toggle('open');
    overlaySection.classList.toggle('overlay');
    console.log('click hamburger')
})