function doConfirm(msg, yesFn, noFn)
{
    var confirmBox = $("#confirmBox");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function()
    {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(yesFn);
    confirmBox.find(".no").click(noFn);
    confirmBox.show();
}



function myFunction() {
    var txt;

    
        //confirm("do you want to continue!");


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