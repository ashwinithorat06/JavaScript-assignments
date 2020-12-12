document.write("positive integer n : 100<br><br>")
//initialize var i to 1 n increase upto 100
for (var i = 1; i <= 100; i++) {

    //if number divisible by 3 and 5 then print 'FizzBuzz' in place of the number
    if ((i % 3) == 0 && (i % 5) == 0) {
        document.write("FizzBuzz, &emsp;");
    }

    //if number divisible by 3 then print 'Fizz' in place of the number
    else if ((i % 3) == 0) {
        document.write("Fizz, &emsp;");
    }

    //if number divisible by 5 then print 'Buzz' in place of the number
    else if ((i % 5) == 0) {
        document.write("Buzz, &emsp;");
    }

    //print number
    else {
        document.write(i + ", &emsp;");
    }
}

