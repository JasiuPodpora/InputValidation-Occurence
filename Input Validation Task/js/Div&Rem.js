var FirstNumber;
var SecondNumber;
var Division;
var Remainder;

FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));

if (FirstNumber < SecondNumber)
{
alert ("First number must be higher than second number");
FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));
}

Division = Math.round((FirstNumber/SecondNumber));

Remainder = (FirstNumber%SecondNumber);

document.write("When you divide the two numbers you get = "+ Division+"<br>")

document.write("And the remainder is = "+ Remainder);