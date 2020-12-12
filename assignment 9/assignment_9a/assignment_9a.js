        //take decimal number from user
        var number = Number(prompt("Enter decimal number", "number"));

        //convert decimal number to binary
        var binary = number.toString(2);

        //convert decimal number to octal
        var octal = number.toString(8);

        //convert decimal number to hexadecimal
        var hexadecimal = number.toString(16);

        //displaying binary, octal and hexadecimal of given decimal number
        document.write("Binary of " + number + " is : " + binary);

        document.write("<br><br>Octal of " + number + " is : " + octal);

        document.write("<br><br>Hexadecimal of " + number + " is : " + hexadecimal);