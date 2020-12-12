//take marks of 3 subjects from user and convert it into number
var subject1 = Number(prompt("enter your subject1 marks", "sub1 marks"));

var subject2 = Number(prompt("enter your subject2 marks", "sub2 marks"));

var subject3 = Number(prompt("enter your subject3 marks", "sub3 marks"));

//calculate average marks
var average = Number.parseFloat((subject1 + subject2 + subject3) / 3);

//displaying sub marks
document.write("Subject1 marks= " + subject1);

document.write("<br><br>Subject2 marks= " + subject2);

document.write("<br><br>Subject3 marks= " + subject3);

//displaying grade
if (average >= 90 && average <= 100) {
    document.write("<br><br>Your average marks = " + average + " <br><br><b>Your grade is Ex</b>.");
}

else if (average >= 80 && average <= 89) {
    document.write("<br><br>Your average marks = " + average + " <br><br><b>Your grade is A+</b>.");
}

else if (average >= 70 && average <= 79) {
    document.write("<br><br>Your average marks = " + average + " <br><br><b>Your grade is A</b>.");
}

else if (average >= 60 && average <= 69) {
    document.write("<br><br>Your average marks = " + average + " <br><br><b>your grade is B+</b>.");
}

else {
    document.write("<br><br>Your average marks = " + average + " <br><br><b>You are FAILED</b>.");
}


