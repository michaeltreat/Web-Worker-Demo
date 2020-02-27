'use strict'

let colorButton = document.getElementById('color-button');

// Hacked refresh
document.getElementById('begin').addEventListener('click', e => location.reload());
// Change color on click
colorButton.addEventListener('click', () => {
  console.log('Changing color!');
  
  let color = (colorButton.style.cssText === 'color: red;') ? 'color: blue;' : 'color: red;';
  colorButton.style.cssText = color;
});

