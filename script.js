// alert("Hello! I am an alert box!!");

// if else statement

/*let number1 = 60;
let number2 = 60;
if  (number1 == number2){
    console.log("the two number are equal");
} else {
    if (number1 > number2){
    console.log("the first number is greather then second number");
} else {
    console.log("the first number is less then second number");
}
}*/

// Switch Statement

/*let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Tuesday":
    console.log("It's the second day of the week");
    break;
  case "Wednesday":
    console.log("It's the middle of the week");
    break;
  case "Thursday":
    console.log("It's almost the weekend");
    break;
  case "Friday":
    console.log("It's the end of the workweek");
    break;
  case "Saturday":
    console.log("It's the weekend!");
    break;
  case "Sunday":
    console.log("It's still the weekend");
    break;
  default:
    console.log("Invalid day");
}*/

// Switch Statement

/*let exercise_day = "day";
switch (exercise_day) {
    case "firstday":
        console.log("first day is my chest exercise");
        break;
    case "secondday":
        console.log("second day is my legs exercise");
        break;
    case "thirdday":
        console.log("third day is my bicep exercise");
        break;
    case "fourthday":
        console.log("fourth day is back exercise");
        break;
    default:
        console.log("Invalid day");

}*/

// if else Statement

/*let x = 25;
if (x > 20){
    console.log("x is greather then 20");
} else {
    if (x < 20) {
        console.log("x is less then 20");
    }
}*/

//  Loops

// While Loops

/*let i = 5;

while (i < 15) {
  console.log("saysomething:", i);
  i ++;
}*/

// Do While loop

/*let count = 1;

do {
  console.log("Iteration: " + count);
  count++;
} while (count < 14);*/

// for loops

/*let count = 10;
function saySomething() {
  console.log("hello!");
}
for (let i = 0; i < count; i++) {
  say*/

/*for (let i = 1; i <= 5; i++) {
  console.log("Iteration: " + i);
}*/

// let count = 0;
// for (let i = 10; count < i; count++) {
//   console.log(count);
// }

/*let count = 100;
let i = 0;
while (i < count) {
  console.log(i);
  i++;
}*




// while loops

/*let count = 0;

while (count < 5) {
  console.log("Iteration number:", count);
  count++;
}*/

//for loops

/*const count = 10;

function saySomething() {
  console.log('Hello!'); // Using console.log instead of document.write
}

for (let i = 0; i < count; i++) {
  saySomething();
}*/

//Array

//constructure

/*let colors = Array(1,2,8,6,9);
console.log(colors);*/

/*let colors = ["red", "blue", "green"];
let names = [7,5,3,1];
let values = [1,5,6,7,9,];

console.log(colors, names, values);*/

/*let colors = ["red", "blue", "green"];
alert(colors[0]);
colors [2] = ["black"];
colors [3] = ["brown"];
console.log(colors);*/

/*let colors = ["red", "blue", "green"];
let names = [];
alert(colors.length);
alert(names.length);
console.log(colors, names);*/

/*let colors = ["red", "blue", "green"];
colors.length = 3;
alert(colors[0]);
console.log(colors);*/

//Push method

/*let colors = new Array();
let count = colors.push("red", "green")
console.log(count);

count = colors.push("black, blue");
console.log(count);

let item = colors.pop();
console.log(item);
console.log(colors.length);*/

/*let colors = new Array();
let count = colors.push("red", "green");
console.log(count);
57
count = colors.push("black, blue");
console.log(count);

let item = colors.shift();
console.log(item);
console.log(colors.length);*/

/*let colors = new Array();
let count = colors.unshift("red", "green");
console.log(count);

count = colors.unshift("black");
console.log(count);

let item = colors.pop();
console.log(item);
console.log(colors.length);*/

/*let array1 = [1,2,3,4];
for (let i=3, len=array1.length; i<len; i++){
  console.log(array1[i]);
}*/

/*let counter = 0;
while (counter < array1.length) {
  //insert code here
  counter++;
}*/

/*let array1 = ['all', 'cow', 'are', 'big'];

for (let index in array1) {
  console.log(array1[index]);
}*/

/*let array1 = ['all', 'cow', 'are', 'big'];
array1.forEach( function (element, index ){
  console.log(array1[index]); 
  // console.log(element);
})*/

/*let array1 = [1,2,3,4,];
array1.slice(1);
array1.slice(2,4);
console.log(array1);*/

// module - 05 Objects of javascript

// let person = {
//    name : "akshay",
//    age :25,
//    job :"software",

// sayName() {
//   console.log(this.age);
// }
// }
// console.log(person.job);
// person.sayName();

/*const some = 10;

try {
  if (some > 10) {
    console.log(true);
  } else {
    console.log(false);
  }
} catch (error) {
  console.error("An error occurred:", error);
}*/

/*let person = {
  name: "akshay",
  age: 25,
  job: "software",
  "likes birds": true,
  sayName() {
    71 + 18;
  },
};
console.log(person.sayName);*/
//  console.log(person.name);
//  console.log(person.age);
//  console.log(person.job);

// person.isAdmin = true;
// console.log(person.isAdmin);

// delete person.age
// console.log(person.age);

// console.log(person["likes birds"]);

// delete person["likes birds"]
// console.log(person["likes birds"]);

// for ( let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

/*const person = {
  name: "Akshay",
  age: 25,
  job: "Software",
  sayAge(){
    console.log(this.age);
  }
};

// Accessing properties and calling the method
console.log(person.age); // Output: Akshay
person.sayAge(); // Output: Akshay*/

/*const person = {
  name: "akshay"
}
person.age=25;
console.log(person.age);*/

/*const person = {
  name: "akshay",
  size: {
    height: 200,
    width: 50,
  },
  sayHi() {
    console.log(person.name);
  },
};
// console.log(person.size.height);
person.sayHi();
// console.log(person.name);*/

/*let person = {};
Object.defineProperties(person, {
  name: { writable: false, value: "akshay" },
});
console.log(person.name);
person.name = "madhu";
console.log(person.name);*/

// property shorthand convention

/*let name = "madhu";
let person = {
  name,
};
console.log(person);*/

// function properties shorthand concention

/*const nameKey = "name";
const ageKey = "age";
const jobKey = "job";

let person = {
  [nameKey]: "madhu",
  [ageKey]: "27",
  [jobKey]: "software",
};
console.log(person);*/

//defining function properties of an object

// let person = {
//   sayName(name) {
//     const person = "my name is ${madhu}";
//   },
// };

// person.sayName();

////////////////PASSWORD GENERATOR//////////////////////
/*let passwordgenerator = (length) => {
  let temp =
    "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * temp.length);
    password += temp.charAt(randomIndex);
  }

  return password;
};

console.log(passwordgenerator(8));*/
///////////////////////////////////////////////////////////////
