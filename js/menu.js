const burger = document.querySelector('.blure')
const burgerBtn = document.querySelector('.burger-menu')
const burgerBtnRevers = document.querySelector('.revers-menu')

burgerBtn.addEventListener('click', (event) => {
    burger.removeAttribute('hidden')
})
burgerBtnRevers.addEventListener('click', (event) => {
    burger.setAttribute('hidden', '')
})