var FirstNumber;
var SecondNumber;
var Difference;

FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));

if (FirstNumber < SecondNumber)
{
alert ("First number must be higher than second number");
FirstNumber = parseInt(prompt("Enter first number"));
SecondNumber = parseInt(prompt("Enter second number"));
}

Difference = (FirstNumber-SecondNumber);

document.write("The difference between the two numbers = "+ Difference);