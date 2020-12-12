document.write("<h2>arrange the elements of an array in ascending, descending order</h2>")
//function declaration
function order(num) {

    //declaring an array
    var arr = [];
    //assigning sum to 0 and product=1
    var temp = 0;
    //Displaying elements of original array 
    for (var i = 0; i < num; i++) {
        arr[i] = +prompt("enter number");
    }
    document.write("<b>Input : " + arr);

    //Sort the array in ascending order    
    for (var i = 0; i < num; i++) {
        for (var j = i + 1; j < num; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //Displaying elements of array in ascending order  after sorting    
    document.write("<br><br>Output :  ascending order : " + arr + "<br>");

    //Sort the array in descending order    
    for (var i = 0; i < num; i++) {
        for (var j = i + 1; j < num; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //Displaying elements of array in ascending order  after sorting    
    document.write("<br>Output :  descending order : " + arr);

}


//getting the size of array
var n = +prompt("how many numbers do you want to enter");

//function call
order(n);