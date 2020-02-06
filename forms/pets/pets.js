let petNames= ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withMaramaduke = petNames.push['Marmaduke']
console.log(petNames)

petNames.splice(5,1)
console.log(`The action taken was: Remove Vinny from the array.`)
console.log(`The remaining data are: ${petNames}.`)

petNames.splice(3,1)
console.log(`The action taken was: Remove Marty from the array.`)
console.log(`The remaining data are: ${petNames}.`)

petNames.unshift('Nancy')
console.log(`The action taken was: Add Nancy to the front of the array.`)
console.log(`The remaining data are: ${petNames}.`)

let userName = alert("What is your name?")
petNames.push(userName)
console.log(`The action taken was: Add user name to the end of the array.`)
console.log(`The remaining data are: ${petNames}.`)

let rileyNum = petNames.indexOf('Riley')
console.log(`The action taken was: Show the array index of Riley.`)
console.log(`${rileyNum}`)

let cindyNum = petNames.indexOf('Cindy')
console.log(`The action taken was: Show the array index of Cindy.`)
console.log(`${cindyNum}`)

console.log(`Shows the withMaramaduke array data.`)
console.log(${withMaramaduke})


