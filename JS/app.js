'use strict'

const elBars = document.querySelector('#menu-bars');
const elHeader = document.querySelector('header');
const elCursor1 = document.querySelector('.cursor-1')
const elCursor2 = document.querySelector('.cursor-2')
const links = document.querySelectorAll('a');
const elForm = document.querySelector('.form');
const elHeaderLink = document.querySelectorAll('.header-link')

elHeaderLink.forEach((item) => {
    item.addEventListener('click',()=>{
        elHeader.classList.toggle('active')
        elBars.classList.toggle('fa-times')
    })
})

elBars.addEventListener('click',()=>{
    elBars.classList.toggle('fa-times')
    elHeader.classList.toggle('active')
})

window.addEventListener("mousemove",(e)=>{
    elCursor1.style.top = e.pageY + 'px'
    elCursor1.style.left = e.pageX + 'px'
    elCursor2.style.top = e.pageY + 'px'
    elCursor2.style.left = e.pageX + 'px'
})
links.forEach((link) => {
    link.addEventListener('mouseenter',(e)=>{
        elCursor1.classList.add('active')
        elCursor2.classList.add('active')
    })
    link.addEventListener('mouseleave',(e)=>{
        elCursor1.classList.remove('active')
        elCursor2.classList.remove('active')
    })
})
elForm.addEventListener('submit',()=>{
    elForm.reset()
    alert('Your message has been sent')
})
