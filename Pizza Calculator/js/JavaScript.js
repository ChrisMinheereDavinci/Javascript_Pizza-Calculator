alert("Er worden 3 vragen aan u gesteld. Deze graag juist invoeren. als u hier niet me akoord gaat kunt u op annuleren klikken. ")


function myFunction() {
    var txt;


    var person = prompt("Please enter your name:", "");

    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "name: " + person + "";
    }
    document.getElementById("name").innerHTML = txt;


    var person = prompt("Please enter your last name:", "");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "last name: " + person + "";
    }
    document.getElementById("last name").innerHTML = txt;


    var person = prompt("Please enter your Age:", "");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "age: " + person + "";
    }
    document.getElementById("age").innerHTML = txt;
}

function my1Function() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}
