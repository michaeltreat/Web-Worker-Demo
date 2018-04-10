'use strict'

let colorButton = document.getElementById('color-button')

// Hacked refresh
document.getElementById('begin').addEventListener('click', e => location.reload())

colorButton.addEventListener('click', () => {
  console.log('Changing color!')
  if(colorButton.style.cssText === 'color: red;'){
    colorButton.style.cssText = 'color: blue;'
  }else{
    colorButton.style.cssText = 'color: red;'
  }
})

