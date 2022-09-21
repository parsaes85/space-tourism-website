let vehiclebtn = document.querySelector('.vehicle-btn')
let spaceportbtn = document.querySelector('.spaceport-btn')
let capsulebtn = document.querySelector('.capsule-btn')
let techName = document.querySelector('.info h1')
let techImg = document.querySelector('.main-container img')
let techDesc = document.querySelector('.text p')
let btns = document.querySelectorAll('.btns button')
let menu = document.querySelector('nav ul')
let menuBtn = document.querySelector('.menu-btn')



function techChange(btn,name,img,desc){
    btn.addEventListener('click' ,e=>{
        techName.innerText = name
        techImg.src = img
        techDesc.innerText = desc
        
        if(e.target.tagName == 'BUTTON'){
            btns.forEach(btn =>{
                btn.style.backgroundColor = 'transparent'
                btn.style.color = 'white'
                btn.style.border = '2px solid rgba(27, 27, 27, 0.7)'
            })
            btn.style.backgroundColor = 'white'
            btn.style.color = 'black'
            btn.style.border = 'none'
        }
    })
}

techChange(vehiclebtn,'LAUNCH VEHICLE','./images/image-launch-vehicle-portrait.jpg',`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`)

techChange(spaceportbtn,'SPACEPORT','./images/image-spaceport-portrait.jpg',`"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`)

techChange(capsulebtn,'SPACE CAPSULE','./images/image-space-capsule-portrait.jpg',`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`)

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