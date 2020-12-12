//initialize var a=1
var a = 1;
//initialize rows to 1
//starting rows from 1 and increasing to 5
for (var rows = 1; rows <= 4; rows++) {

    //declaring var cols and assigning to 1 and increasing upto 5
    for (var cols = 1; cols <= rows; cols++) {
        document.write(a++ + "&emsp;");
    }
    document.write("<br><br>");
}