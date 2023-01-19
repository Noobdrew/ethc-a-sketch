//set DOM elements to variables
const container = document.querySelector('.container')
let colorDiv = document.querySelector('.grid-element')
let amount = document.querySelector('#range').value
let rangeText = document.querySelector('.rangeText')

let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false
let drawMode = 'color'
createDiv()

//create a new div and append it to container on call
function createDiv(e) {
    slideValue()
    container.textContent = ''
    for (let i = 0; !(amount * amount == i); i++) {

        e = document.createElement('div')
        e.classList.add('grid-element')
        container.appendChild(e)
        container.style.cssText = `grid-template-columns: repeat(${amount}, 1fr); grid-template-rows: repeat(${amount}, 1fr)`
    }


}

//create multuple divs

document.querySelector('#range').addEventListener('change', createDiv)
document.querySelector('#range').addEventListener('input', slideValue)
container.addEventListener('mouseover', changeColor)



function slideValue() {
    amount = document.querySelector('#range').value
    rangeText.textContent = `${amount}X${amount}`

}

//color divs
function changeColor(e) {
    if (mouseDown==false) {
        return

    } else if (drawMode == 'color') {
        
        e.target.style.cssText = `background-color: ${color.value}`
    } else if (drawMode == 'rainbow') {
        let randomR = Math.floor(Math.random() * 256)
        let randomG = Math.floor(Math.random() * 256)
        let randomB = Math.floor(Math.random() * 256)
        e.target.style.cssText = `background-color: rgb(${randomR}, ${randomG},${randomB} )`
    }



}

let color = document.querySelector('#color')

let buttonClear = document.querySelector('.clear')
let buttonRainbow = document.querySelector('.rainbow')
let buttonColor = document.querySelector('.colorBtn')
buttonClear.addEventListener('click', clear)

function clear(e) {
    container.innerHTML = ''
    createDiv()
}


buttonRainbow.addEventListener('click', rainbowDraw)
buttonColor.addEventListener('click', colorDraw)

function rainbowDraw() {
    drawMode = 'rainbow'
}

function colorDraw() {
    drawMode = 'color'
}