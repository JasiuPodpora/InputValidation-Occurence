var studentNames = ['Andrew','Brodi','Damon','Stephen','Lili','Piotr','Drew','Bianca','Nathan','Andrew','Damon','Brodie','Andrew']

var NameChosen = prompt("Search for a name out of the list, Andrew, Lili, Damon, Stephen, Brodie, Piotr, Drew, Bianca, Nathan");
var TimesFoundInList = 0;
var found = false;

for (x = 0; x < studentNames.length; x++) {
    if (studentNames[x] == NameChosen) {
        document.write("The name "+studentNames[x] + " has been found in position " + x+ " on the list"+"<br>");
        found = true;
        TimesFoundInList++
    }
}
if (TimesFoundInList == false) {
    document.write("Im sorry the name you type in doesn't exist"+"<br>");
}
document.write(NameChosen+" has been found "+TimesFoundInList+" times in the names list"+"<br>");