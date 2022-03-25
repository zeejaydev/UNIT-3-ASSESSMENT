const button = document.querySelector('button')
const clicked = ()=>{
    alert('Sent, Thanks!')
}

const color = document.getElementById('color')
const place = document.getElementById('place')
const ritual = document.getElementById('ritual')

color.addEventListener('click', ()=>{
    alert('Blue')
})
place.addEventListener('click', ()=>{
    alert('Spain')
})
ritual.addEventListener('click', ()=>{
    alert('Coding')
})