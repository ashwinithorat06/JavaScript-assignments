//take time in hours from user
var time = Number(prompt("enter time in hours", "time"));

//get time in am or pm from user
var string = prompt("enter time in am or pm", "am/pm");

//displaying messages
if (time >= 1 && time <= 12 && string == "am") {
    document.write("<b>Good Morning !</b> <br><br> Time is " + time + string);
}

else if (time >= 12 && time <= 16 && string == "pm") {
    document.write("<b>Good Noon !</b> <br><br> Time is " + time + string);
}

else if (time >= 16 && time <= 19 && string == "pm") {
    document.write("<b>Good Evening !</b> <br><br> Time is " + time + string);
}

else if (time >= 19 && time <= 24 && string == "pm") {
    document.write("<b>Good Night !</b> <br><br> Time is " + time + string);
}