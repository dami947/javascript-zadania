//Zadanie 1 

let n1 = 15,
    n2 = 6;

if(n1 > n2){
  console.log(n1);
} else {

    console.log(n2):
}

//Zadanie 2

let n1 = 2,
n2 = 4,
n3= 5;

if(n1>n2 && n1>n3){
    console.log(n1 + ' jest największe');
}else if ( n2>n1 && n2>n3) {
    console.log(n2 + ' jest najwieksze');
} else{
  console.log( n3+ ' jest najwieksze');
} 

//Zadanie 3 

for (let i=0; i<10; i++) {
    console.log("Lubię Java");
}

//Zadanie 4

let result = 0;
for(let i=0; i<=10; i++){
    result += i;
}
console.log(result);

//Zadanie 5

var n = 5;
for(let i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

//Zadanie 6

for(let i = 0; i< 5; i++){
    for(let j=0; j<5; j++){
        console.log("i= " + i + ", j= " + j);
    }
    
}

//Zadanie 7

console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

//Zadanie 8A

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//Zadanie 8B

let star = ' *';

for(let x = 0; x < 5; x++) {
 var result = '';
 for(y = 0; y < 5 - x; y++) {
 result += ' ';
 }
 for(z = 0; z < x + 1; z++) {
 result += star;
 }
 console.log(result);
 }
 
 //Zadanie 8C
 
 let tree = '';
  const height = 5;
  let stars = 1;
  for (let row = 1; row <= height; row++) {
    tree += ' '.repeat(height-row);
    tree += '*'.repeat(stars) + '\n';
    stars += 2;
  }
  console.log(tree);
  
  //Zadanie 8D
  
  let show = '';
  let show1 = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    show += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      show += i;
    }
    show += '\n';

    show1 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      show1 += i;
    }
    show1 += '\n';
  }
  console.log(show);
  console.log("-".repeat(height));
  console.log(show1);
  
  //Zadanie 8E
  
  var dart = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    dart += ' '.repeat(size-i);
    dart += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    dart += " ".repeat(size-1);
    dart += "* \n";
  }
  console.log(dart);


