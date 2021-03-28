
// task 11/03/21



// task perform on 09/03/2021
function hello(){
  console.log("hi there! I\'m learning javascript.")
}
hello()

//task 2
function names(firstName, lastName){
  var fullName = `Hello ${firstName} ${lastName}`
  return fullName
}

var sayFullName = names("Joanna ", "Rachel")
console.log(sayFullName)

names("Joanna ", "Bak");
names("Ala ", "Cat");
console.log(names("cat ", "ola"));

//task 4
var currenttemperature = 30;
function cold(temperature){
if (temperature >= 30 && temperature < 70){
  console .log("Put on coat");
} else if(temperature > 0 && temperature < 30) {
  console.log("put on a coat and a hat");
} else if(temperature < 0) {
  console.log("stay inside");
} else {
  console.log("pants and vest are fine")
}
}
cold(currenttemperature);
cold(60); //if I don't put the function it will not work
cold(29);
cold(-7);//dev tools will show console.log only in reference to this function written.
//Thus a function is executed, but shown in the consol.log


/*for (i=1, j=3; i<=5; i++, ++j) {
  document.write(j + " ", i + "<br>");
}*/
var day_of_week = 6;
switch(day_of_week) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  document.write("working days");

  case 6:
  document.write("saturday");

  default:
  document.write("today is sunday");
  break;
}


function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here


var day = 7-2;

for (day = 1; day <= 6; day++) {
        if (day == 6){
break;
        }
    document.write(day + "<br>");

}














/* Alert pops up when I open the page*/
alert("Hello World");
console.log("Secret message");
// Console keeps the message in the dev tools
document.write("Cześć, jestem nowym wersem")/* It is a text on the page*/;

var language = "english";
console.log(language);
document.write(language);

var balls = 4;
var apples = 9;
var totalitems = null;
console.log(balls+apples);

console.log("totalitems",apples + balls);

console.log(apples%balls);
console.log("Modules", apples, balls);

console.log(-balls);

var ball = "A ball is to ";
var definition = ball + "play football";
console.log(definition); // Outputs "A ball is to play football"
document.write(definition);

//console.log("definition" ${balls+})

var x = 100;
console.log(x);

x = 42;
console.log(x);

//version 1
var quote = "John has got a dog \n Anne has a cat";
console.log(quote);

//version 2
var John = "John has got a dog";
var Anne = "Anne has a cat";
console.log(John, Anne);


//practise switch
var ccc = 3;
var kod;

switch (ccc) {
  case 1:
    kod = ccc;
    break;
  case 2:
    kod = ccc+2;
      break;
  default:
    kod = ccc+5;

}
console.log(kod);






//Fish&chips 15.00 x 2 = 30.00
var item = 15.00;
var quantity = 2;
var total = item * quantity;
var tip = 0.1816;
var tipvalue = total * tip;
var Grosstotal = tipvalue + total;
//Tip of 18.16%
//we need to roundup 5,448
//Total: 35.45

console.log(Grosstotal);
console.log(total);
console.log(tip);


//version2
//function for calc. bill, this include var input from the form and def. the name of that var form.
//document.getElementById("valuess").onload = function() {valuess1()};
function valuess1(){
var item1 = "Fish&chips: £ " + 10.00;
document.getElementById("item1").innerHTML = item1;
var tip1 = 0.1816;
var tipvalue1 = "Tip 18.16%: " + total1 * tip1;
document.getElementById("tipvalue1").innerHTML = tipvalue1;

}
function calc(){
var quantity1 = parseFloat(document.getElementById("quantity1").value);
var total1 = item1 * quantity1;
var Grosstotal1 = tipvalue1 + total1;
document.getElementById("price").innerHTML = Grosstotal1;

}
//these are variable, which are not changeable


//Tip of 18.16%
//we need to roundup 5,448
//Total: 35.45

console.log(Grosstotal);
console.log(total);
console.log(tip);


//learning:
var a = null, b = 10;
var z = ++b;
console.log(z);

var a = 6>5, b = 4>5;
var c = a ?? b;
console.log(c);
/*&& it will be TRUE, if only 2 var are met requirements being TRUE. This means AND.
|| means OR, this will return TRUE, if only 1 var is met reuirements being TRUE.
if both var are FALSE, the outcome is FALSE.
this is ! incorrect, there should've been ?? , which means NOT, so this will be TRUE if one var is FALSE. This checks errors.*/
