//take temperature in Fahrenheit from user
var tempFahrenheit = Number(prompt("Enter Temperature in Fahrenheit Value :", "Fahrenheit"));

//convert Fahrenheit in Celcius
var tempCelcius = (tempFahrenheit - 32) * 5 / 9;

//display temperature in celcious and fahrenheit
document.write("Temperatute in Fahrenheit : " + tempFahrenheit);

document.write("<br><br><b>Fahrenheit to Celcius Conversion</b> <br><br>Temperatute in Celcious : " + tempCelcius);