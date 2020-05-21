const dieRolls = []
let position = 0
let positionB = 0
const numDice = document.querySelector('#num-dice')
const rollButton = document.querySelector('#roll-button')
const allRollsButton = document.querySelector('#all-rolls')

//const sum = document.querySelector('#Total')
// const numberOfRolls = 


rollButton.addEventListener('click', function () {
  let userinput = numDice.value

  while (position < userinput) {
    let baby = Math.floor(Math.random() * 6) + 1
    dieRolls.push(baby)

    position += 1
  }

  let sum = 0
  while (positionB < dieRolls.length) {
    sum += dieRolls[positionB]
    positionB += 1

  }
  console.log(sum)
  document.getElementById('Total').innerHTML = "The sum of all rolls is " + sum
})


allRollsButton.addEventListener('click', function () {

  for (let counter = 0; counter < dieRolls.length; counter += 1) {

    console.log(counter)

    const newDiceString = '<li class="all-rolls">' + dieRolls[counter] + "</li>";

    document.getElementById('rolls-list').innerHTML += newDiceString;
  }
})


console.log(dieRolls)


    // Create a reset button which, on click, 
    // will empty the array and the innerHTML of your Total and All Rolls elements. (3 points)
    // Make each "dice roll" element look more like an actual six-sided (cube) die. 
    // You don't have to show dice pips – numbers are fine. 
    // Just find some ways to style these "dice" elements to help the user "see" them as dice. (2 points)
    // Create a user input box, where a user can specify the number of sides on the dice. 
    // For example, instead of six-sided dice, the user could opt for a 20-sided die. (3 points)

