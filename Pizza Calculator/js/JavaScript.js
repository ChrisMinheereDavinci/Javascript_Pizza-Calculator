
//maak een variable aan met de piza grotes en laat dat zien in een promt.
var small = prompt('aantal kleine pizzas'); 
var medium = prompt('aantal middel pizzas');
var large = prompt('aantal groote pizzas');

//Berekening hoeveel de aantal pizza grotes bij elkaar kosten.
var totalsmall = small * 4.20;      //prijs piza is en variable
var totalmedium = medium * 6.90;
var totallarge = large * 11.70;

//Aantal piza's totaal.
var totalprize = totalsmall + totalmedium + totallarge;


document.write('Kleine pizza prijs: \u20ac ' +4.20 * small + '<br>');  //schrijf bedrag en text naar scherm
document.write('Normaale pizza prijs: \u20ac ' +6.90 * medium + '<br>');
document.write('Groote pizza prijs: \u20ac ' + 11.70 * large + '<br>');

document.write('<br> Aantal kleine pizzas ' + small + '<br> Aantal Normaale pizzas ' + medium + '<br> Aantal Groote pizzas ' + large + '<br>'); 

//schrijft de totaal stant naar scherm.
document.write('<br> Totaal prijs: \u20ac ' + totalprize);