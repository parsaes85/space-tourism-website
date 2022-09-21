let moonbtn = document.querySelector('.moon-btn')
let marsbtn = document.querySelector('.mars-btn')
let europabtn = document.querySelector('.europa-btn')
let titanbtn = document.querySelector('.titan-btn')
let planetName = document.querySelector('.text h1')
let planetImg = document.querySelector('.main-container img')
let planetDesc = document.querySelector('.text p')
let planetDistance = document.querySelector('.distance h2')
let planetTravelTime = document.querySelector('.travel-time h2')
let btns = document.querySelectorAll('.btns button')
let menu = document.querySelector('nav ul')
let menuBtn = document.querySelector('.menu-btn')



function planetChange(btn,name,img,desc,distance,travelTime){
    btn.addEventListener('click' ,e=>{
        planetName.innerText = name
        planetImg.src = img
        planetDesc.innerText = desc
        planetDistance.innerText = distance
        planetTravelTime.innerText = travelTime

        if(e.target.innerText == name){
            btns.forEach(btn =>{
                btn.style.borderBottom = '2px solid transparent'
                btn.style.color = 'hsl(231, 77%, 90%)'
            })
            btn.style.borderBottom = '2px solid white'
            btn.style.color = 'white'
        }
    })
}

planetChange(moonbtn,'MOON',"./images/image-moon.png",`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,'384,400 KM','3 DAYS')

planetChange(marsbtn,'MARS',"./images/image-mars.png",`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,'225 MIL. KM','9 MONTHS')

planetChange(europabtn,'EUROPA',"./images/image-europa.png",`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,'628 MIL. KM','3 YEARS')

planetChange(titanbtn,'TITAN',"./images/image-titan.png",`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,'1.6 BIL. KM','7 YEARS')

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