//set DOM elements to variables
const container = document.querySelector('.container')

let amount = document.querySelector('#range').value
let rangeText = document.querySelector('.rangeText')

let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false
let drawMode = 'color'

createDiv()

//create a new div and append it to container on call
function createDiv() {
    slideValue()
    container.textContent = ''
    container.style.cssText = `grid-template-columns: repeat(${amount}, 1fr); grid-template-rows: repeat(${amount}, 1fr)`
    for (let i = 0; !(amount * amount == i); i++) {
        let gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        container.appendChild(gridElement)
    }


}

//create multuple divs

document.querySelector('#range').addEventListener('change', createDiv)
document.querySelector('#range').addEventListener('input', slideValue)
//container.addEventListener('mouseover', changeColor)



function slideValue() {
    amount = document.querySelector('#range').value
    rangeText.textContent = `${amount}X${amount}`

}

//color divs
function changeColor(e) {

    if (e.type == 'mouseover' && !mouseDown) {
        return

    } else if (drawMode == 'color') {

        e.target.style.cssText = `background-color: ${color.value}`
    } else if (drawMode == 'rainbow') {
        let randomR = Math.floor(Math.random() * 256)
        let randomG = Math.floor(Math.random() * 256)
        let randomB = Math.floor(Math.random() * 256)
        e.target.style.cssText = `background-color: rgb(${randomR}, ${randomG},${randomB} )`
    } else if (drawMode == 'erase') {
        e.target.style.cssText = `background-color: white`
    }



}

let color = document.querySelector('#color')

let buttonClear = document.querySelector('.clear')
let buttonRainbow = document.querySelector('.rainbow')
let buttonColor = document.querySelector('.colorBtn')
let buttonErase = document.querySelector('.erase')
buttonClear.addEventListener('click', clear)

function clear() {
    container.innerHTML = ''
    createDiv()
}


buttonRainbow.addEventListener('click', rainbowDraw)
buttonColor.addEventListener('click', colorDraw)
buttonErase.addEventListener('click', erase)

function rainbowDraw() {
    drawMode = 'rainbow'
    buttonRainbow.style.cssText = ' background-color: #bb7f7f'
    buttonColor.style.cssText = ' background-color: #F0DBDB'
      buttonErase.style.cssText = ' background-color: #F0DBDB'
}

function colorDraw() {
    drawMode = 'color'
    buttonColor.style.cssText = ' background-color: #bb7f7f'
    buttonRainbow.style.cssText = ' background-color: #F0DBDB'
    buttonErase.style.cssText = ' background-color: #F0DBDB'
}
function erase() {
    drawMode = 'erase'
    buttonColor.style.cssText = ' background-color: #F0DBDB'
    buttonRainbow.style.cssText = ' background-color: #F0DBDB'
    buttonErase.style.cssText = ' background-color: #bb7f7f'
}