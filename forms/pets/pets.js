var petNames= ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(`${petNames}`)

var withMaramaduke= petNames.push('Marmaduke')

petNames.splice(5,1)
console.log(`The action taken was: Remove Vinny from the array.`)
console.log(`The remaining data are: ${petNames}.`)

petNames.splice(3,1)
console.log(`The action taken was: Remove Marty from the array.`)
console.log(`The remaining data are: ${petNames}.`)

petNames.unshift('Nancy')
console.log(`The action taken was: Add Nancy to the front of the array.`)
console.log(`The remaining data are: ${petNames}.`)

let userName = prompt("What is your name?")
petNames.push(userName)
console.log(`The action taken was: Add user name to the end of the array.`)
console.log(`The remaining data are: ${petNames}.`)

let rileyNum = petNames.indexOf('Riley')
console.log(`The action taken was: Show the array index of Riley.`)
console.log(`${rileyNum}`)

let cindyNum = petNames.indexOf('Cindy')
console.log(`The action taken was: Show the array index of Cindy.`)
console.log(`${cindyNum}`)

let petMaramaduke = petNames.concat(withMaramaduke)
console.log(`Shows the withMaramaduke array data.`)
console.log(`The remaining data are: ${petMaramaduke}`)

let abB= petNames.shift()
console.log(`The removed element is: ${abB}.`)

let abC= petNames.unshift('Barney')
console.log(`The added element is: ${abC}.`)

let somePets = ['Ted','Fred','Jed','Ned','Ed','Zed']
let allPets = petNames.concat(somePets)
console.log(`${allPets}`)

let stringPets = petNames.join()
console.log(`${stringPets}`)

let abF = petNames.unshift('Agnes')
console.log(`The added element is: ${abF}.`)

