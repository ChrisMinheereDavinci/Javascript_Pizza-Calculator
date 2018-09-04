// a const is created containing the message.
const MELDING = "Er worden 3 vragen aan u gesteld. Deze graag juist invoeren. als u hier niet me akoord gaat kunt u op annuleren klikken.";

alert (MELDING); //the message is now displayed here.

//makes a variable with the information you give.
var name = ('<br>name:' + prompt("name"))
var lastname = ('<br>lastname:' + prompt("lastname"))
var age = ('<br>age:' + prompt("age"))

//writes the info to the browser.
document.write(name)
document.write(lastname)
document.write(age)
