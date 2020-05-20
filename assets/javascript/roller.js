const dieRolls = []
let position = 0
const numDice = document.querySelector('#num-dice')
const rollButton = document.querySelector('#roll-button')
 // const numberOfRolls = 
rollButton.addEventListener('click', function () {
    let userinput = numDice.value
    
    while (position < userinput ) {
      let baby = Math.floor(Math.random() * 6) + 1
      dieRolls.push(baby)


      position += 1 
    }
    
    console.log(dieRolls)
    






    // 1. get the value of the input text box and assing this to a variable within your event listener 
    // 2. loop THAT number of times
    // 3. And each time roll randomly from 1 to 6

})