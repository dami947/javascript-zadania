//Zadanie 1

let x = true,
    y = false;

console.log(x == y)

//Zadanie 2

const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1

//Zadanie 3

let stringsResult = "",
    a = "test",
    b = "foo";

stringsResult = a + b;
console.log(stringsResult);

//Zadanie 4 

var someNumber = 425;
var someString = "425";

console.log(someNumber==someString);
console.log(someNumber===someString);

// W 1 linijce jest true, bo wartości są takie same, ale w 2 jest false bo jest to inny typ wartości

//Zadanie 5

let counter = 30;

console.log(counter); //30

counter++; 
console.log(counter); // 31

counter--;
console.log(counter); // 30

//Zadanie 6

let n1 = 15,
    n2 = 6,
    result = null;
    
result = n1 > n2;

console.log(result); // false
