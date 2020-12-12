//initialize rows to 5. starting rows from 5 and decreasing to 1
for (var rows = 5; rows >= 1; rows--) {

    //declaring var cols and assigning to 1 and increasing upto 5
    for (var cols = 1; cols <= rows; cols++) {
        document.write("* &nbsp;");
    }
    document.write("<br>");
}