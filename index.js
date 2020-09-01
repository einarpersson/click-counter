const buttons = document.getElementsByTagName('button')
const counter = document.getElementById('counter')

let count = 0

buttons[0].addEventListener('click', clickHandler)
buttons[1].addEventListener('click', clickHandler)

function clickHandler(ev) {
  if (ev.target.innerText === '+') {
    count++
  } else if (ev.target.innerText === '-') {
    count--
  } else {
    console.error('What just happened?')
  }
  counter.innerText = count
}
