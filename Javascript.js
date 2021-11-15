//maths
var num = 1;
var num2 = 3;
console.log(num * num2);

//array
var animal = ["tiger", "lion", "dog", 96];
console.log(animal[2]);
//for

for (var i = 1; i <= 2; i++) {
  console.log(i);
}
var india = "dubai";
console.log(india);
//while
var i = 1;
while (i <= 2) {
  console.log(i);
  i++;
}
//forEach
var numberList = [1, 2, 3, 4];
numberList.forEach(function (num) {
  console.log(num);
});
var ajayAge = 2;
var KumarAge = 6;
var deepakAge = 2;

if (deepakAge === KumarAge) {
  console.log("True");
} else {
  console.log("false");
}

var color = "black";
switch (color) {
  case "red":
  case "blue":
    console.log("i like red");
    console.log("i hate blue");
    break;
  default:
    console.log("choose the color");
}

// object literal

var employeeDetails = {
  firstName: "abdul",
  lastName: "rahman",
  mobile: 9812345690,

  address: {
    street: "2nd street",
    city: "chennai",
    state: "tamilNadu",
  },
};
console.log(employeeDetails.address.city);

//object constructor

var carList = new Object();

carList.name = "bmw";
carList.type = "suv";
carList.color = "red";

carList.name = "audi";
carList.type = "suv";
carList.color = "blue";

console.log(carList.color);

//var List = new Object();
function List(company, model, milege) {
  this.company = company;
  this.milege = milege;
  this.model = model;
}
var car = new List("BMW", "s-class", "23");

console.log(car.company);

// factory  function

function createStudent (name);
{

    return {
        name : name,

        greeting : function(createStudent){

            let msg = "you  have promoted";
            console.log(msg);
        }
    };
}

let anbu = createStudent("appu");

anbu.greeting();

function myFunction() {
  myFunction;

  console.log("Welcome");
}

myFunction();

function greeting(message, name) {
  if (name) {
    return "welcome" + messaage + name;
  } else {
    return "welcome" + message;
  }
}
var greet1 = greeting("to the new world");

console.log(greet1);

{
  var authorName = "Abdul Rahman";
  console.log(authorName);
}
console.log(authorName);
