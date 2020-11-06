var FirstNumber;
var SecondNumber;
var Total;
var Difference;
var Product;
var Division;
var Remainder;

FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));

while (FirstNumber > SecondNumber);
alert ("First number must be higher than second number");
FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));

Total = (FirstNumber+SecondNumber);

Difference = (FirstNumber-SecondNumber);

Product = (FirstNumber*SecondNumber);

Division = Math.round((FirstNumber/SecondNumber));

Remainder = (FirstNumber%SecondNumber);

document.write(Total+" "+ Difference+" " + Product+ " "+ Division+ " "+ Remainder);