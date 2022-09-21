let douglasbtn = document.querySelector('.douglas-btn')
let markbtn = document.querySelector('.mark-btn')
let victorbtn = document.querySelector('.victor-btn')
let anoushehbtn = document.querySelector('.anousheh-btn')
let crewName = document.querySelector('.text h1')
let crewImg = document.querySelector('.main-container img')
let crewDesc = document.querySelector('.text p')
let crewPlace = document.querySelector('.text h2')
let btns = document.querySelectorAll('.btns button')
let menu = document.querySelector('nav ul')
let menuBtn = document.querySelector('.menu-btn')


function crewChange(btn,name,img,desc,place){
    btn.addEventListener('click' ,e=>{
        crewName.innerText = name
        crewImg.src = img
        crewDesc.innerText = desc
        crewPlace.innerText = place

        if(e.target.innerText == ''){
            btns.forEach(btn =>{
                btn.style.backgroundColor = 'rgba(114, 111, 111, 0.705)'
            })
            btn.style.backgroundColor = 'white'
        }
    })
}
crewChange(douglasbtn,'DOUGLAS HURLEY','./images/image-douglas-hurley.png',`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,'COMMANDER')

crewChange(markbtn,'MARK SHUTTLEWORTH','./images/image-mark-shuttleworth.png',`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,'MISSION SPECIALIST')

crewChange(victorbtn,'VICTOR GLOVER','./images/image-victor-glover.png',`Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,'PILOT')

crewChange(anoushehbtn,'ANOUSHEH ANSARI','./images/image-anousheh-ansari.png',`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`,'FLIGHT ENGINEER')

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