//take total number of stones from user
var stones = +(prompt("Enter number of stones in a heap : ", "total stones"));
document.write("Total number of stones in a heap = " + stones);
var you = "";
var friend = "";
var chance1 = true;
var chance2 = false;

//main loop
outer: while (chance1 || chance2) {
    var a = 0;

    //condition for player1
    if (chance1 && stones > 1) {

        //take number of stones to be removed 
        a = +(prompt("Enter number of stones you want to remove : ", "1/2/3"));

        while (a === null || a == "" || a > 3 || a < 0);

        //substracting values from total number of stones
        stones = stones - a;
        //checking heap for player1
        if (stones == 1 || stones == 4) {
            you = you + a + ", ";

            window.alert("You removed " + you + " stones and remaining stones are" + stones);
            //display number of stones removed
            document.write("<br><br>Number of stones removed by player1 : " + you);
            //display remaining stone
            document.write("<br><br>Number of stones remained in a heap : " + stones);
            document.write("<br><br><b>You won the game");
            break;
        }

        else {
            you = you + a + ", ";
            window.alert("You removed " + you + " stones and remaining stones are" + stones);
            //display number of stones removed
            document.write("<br><br>Number of stones removed by player1 : " + you);
            //display remaining stone
            document.write("<br><br>Number of stones remained in a heap : " + stones);

            if (stones == 1 || stones <= 4) {
                document.write("<br><br><b>Your friend won the game");
                break outer;
            }

            //turn on player2 after player1 completed his turn
            chance1 = false;
            chance2 = true;
        }
    }

    //condition for player2
    else if (chance2 && stones > 1) {

        a = +(prompt("Enter number of stones you want to remove : ", "1/2/3"));

        while (a === null || a == "" || a > 3 || a < 0);

        //substracting values from total number of stones
        stones = stones - a;

        //checking heap for player2
        if (stones == 1 || stones == 4) {
            friend = friend + a + ", ";

            window.alert("your friend removed " + friend + " stones and remaining stones are" + stones);
            //display number of stones removed
            document.write("<br><br>Number of stones removed by player2 : " + friend);
            //display remaining stone
            document.write("<br><br>Number of stones remained in a heap : " + stones);

            document.write("<br><br><b>Your friend won the game");
            break;
        }
        else {
            friend = friend + a + ", ";
            window.alert("your friend removed " + friend + " stones and remaining stones are" + stones);
            //display number of stones removed
            document.write("<br><br>Number of stones removed by player2 : " + friend);
            //display remaining stone
            document.write("<br><br>Number of stones remained in a heap: " + stones);

            if (stones == 1 || stones <= 3) {
                document.write("<br><br><b>You won the game");
                break outer;
            }
            //turn on player1 after player2 completed his turn
            chance1 = true;
            chance2 = false;
        }
    }
}