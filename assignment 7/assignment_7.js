
//getting number of moves
var moves = +prompt("enter number of moves of robot");
var x1 = 0, y1 = 0, x2 = 0, y2 = 0, dir = "", value;
//Loops to get the direction till number of moves
outer:
for (var i = 0; i < moves; i++) {
    var direction = prompt("enter direction:");
    dir += direction;
    switch (direction) {
        case "u":
            x1++;
            break;
        case "d":
            x2++;
            break;
        case "l":
            y1++;
            break;
        case "r":
            y2++;
            break;
        default:
            document.write("Invalid direction only l, r, u, d direction allowed");
            break outer;
    }
}
document.write("<br>entered directions are:" + dir);
//document. write("<br>x1:"+x1+"<br>x2:"+x2+"<br>y1:"+y1+"<br>y2:"+y2);
value = Boolean((x1 && x2) || (y1 && y2));
document.write("<br>Output:" + value);