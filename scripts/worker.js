'use strict'

let counter = 1000000001

while( counter--){
  if( counter % 100000000 === 0) console.log(`While loop is Currently at: ${counter}`) 
}

console.log('------------ While Loop has Ended! -----------')
