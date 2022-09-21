let menu = document.querySelector('nav ul')
let menuBtn = document.querySelector('.menu-btn')


if(window.innerWidth < 845 && window.innerWidth > 475){
    document.querySelectorAll('nav ul li span').forEach(span =>{
        span.remove()
    })
}

menuBtn.addEventListener('click',()=>{
    if(menu.className == ''){
        menu.classList.add('show')
        menuBtn.src = './images/icon-close.png'

    }else{
        menu.classList.remove('show')
        menuBtn.src = './images/icon-hamburger.png'
    }
})

if(window.innerWidth < 475){
    menuBtn.src = './images/icon-hamburger.png'
}