const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const  clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
let color = 'black'
let x 
let y

canvas.addEventListener('mousedown', (e) =>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    
})

canvas.addEventListener('mouseup', (e) =>{
    isPressed = false

    x = undefined
    y = undefined

   
})


canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2

    }
})



function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color 
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color 
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// function incrase size of the pencil
function updateSizeOnScreen(){
    sizeEl.innerText = size
}
// increase size of the pencil
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

//decrease size of the pencil - I did it myself!
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 2){
        size = 2
    }

    updateSizeOnScreen()
})


//chenge the color 
colorEl.addEventListener('change', (e) => color = e.target.value )

//clear the canvas
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height)
)