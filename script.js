const counterEl = document.querySelector('.counter')
const increaseButtonEl  = document.querySelector('.counter--button--increase')
const decreaseButtonEl  = document.querySelector('.counter--button--decrease')
const resetButtonEl  = document.querySelector('.counter--reset-button')
const counterValueEl  = document.querySelector('.counter--value')
const counterTitleEl  = document.querySelector('.counter-title')

resetButtonEl.addEventListener('click', () => {

  counterValueEl.textContent = 0

  counterEl.classList.remove('counter--limit')

  counterTitleEl.textContent = 'Fancy Counter'

  increaseButtonEl.disabled = false
  decreaseButtonEl.disabled = false

  resetButtonEl.disabled = false

  resetButtonEl.blur()

})

decreaseButtonEl.addEventListener('click', () => {

  const currentValue = counterValueEl.textContent

  const cuurentValueAsNumber = +currentValue

  let newValue = cuurentValueAsNumber - 1

  if (newValue < 0) {
    newValue = 0
  }

  counterValueEl.textContent = newValue

})

const incrementCounter = () => {

  const currentValue = counterValueEl.textContent

  const currentValueAsNumber = +currentValue

  let newValue = currentValueAsNumber + 1

  if (newValue > 5){
    newValue = 5

    counterEl.classList.add('counter--limit')

    counterTitleEl.innerHTML = 'Limit! Buy Pro for > 5'

    increaseButtonEl.disabled = true
    decreaseButtonEl.disabled = true
  }

  counterValueEl.textContent = newValue

  increaseButtonEl.blur()

}

increaseButtonEl.addEventListener('click', incrementCounter)
document.addEventListener('keydown', incrementCounter)

