//set DOM elements to variables
const container = document.querySelector('.container')
let colorDiv = document.querySelector('.grid-element')
let amount = document.querySelector('#range').value
let rangeText = document.querySelector('.rangeText')
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


console.log(amount)

document.querySelector('#range').addEventListener('change', createDiv)
document.querySelector('#range').addEventListener('input', slideValue)
container.addEventListener('mouseover', changeColor)


function slideValue() {

    amount = document.querySelector('#range').value
    rangeText.textContent = `${amount}X${amount}`
    console.log(amount)
}

function changeColor(e) {
    
    e.target.classList.add('colored')

}

console.log(document.querySelector('#color').value)