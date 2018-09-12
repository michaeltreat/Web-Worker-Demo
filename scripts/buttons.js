'use strict'

let colorButton = document.getElementById('color-button')

// Hacked refresh
document.getElementById('begin').addEventListener('click', e => location.reload())

colorButton.addEventListener('click', () => {
  console.log('Changing color!')
  
  let style = colorButton.style.cssText;
  (style === 'color: red;') ? 'color: blue;' : 'color: red;'
  
//   if(colorButton.style.cssText === 'color: red;'){
//     colorButton.style.cssText = 'color: blue;'
//   }else{
//     colorButton.style.cssText = 'color: red;'
//   }
})

