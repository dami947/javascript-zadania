//Zadanie 1

function Person (name,lastname,age,country,city){
    
    this.name = name;
    this.lastname = lastname;
    this.age=age ;
    this.country=country;
    this.city=city;
    
    this.showDetails = function(){
      console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country} city: ${this.city}`);  
    }
    
    this.addOneYear = function() {
        ++this.age;
    }
    
}

const person =new Person ('Grzegorz','Milik',18,'Poland','Kraków');
const person2 =new Person ('Jan','Nowak',23,'Poland', 'Krakow');

person.showDetails();
person.addOneYear();
person.addOneYear();
person.addOneYear();
person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.addOneYear();
person2.addOneYear();
person.showDetails();

//Zadanie 2

 console.log("\nZadanie 2:");
  
  person.favouriteMeal = [];
  secondPerson.favouriteMeal = [];
  
  function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;
  secondPerson.showMeal = showMeal;
  secondPerson.addMeal = addMeal;
  
  person.addMeal("schabowy");
  person.addMeal("placek");
  person.addMeal("pierogi");
  person.showMeal();
  
  secondPerson.addMeal("schabowy 2");
  secondPerson.addMeal("placek 2");
  secondPerson.addMeal("pierogi 2");
  secondPerson.showMeal();

//Zadanie 3 

function Calculator() {
  this.memory = [];
  this.sum = () => this.memory.reduce((a, b) => a + b);
  this.sub = () => this.memory.reduce((a, b) => a - b);
  this.mul = () => this.memory.reduce((a, b) => a * b);
  this.div = () => {
    if (this.memory.includes(0)) {
      console.error("You cant't divide by zero.");
      return undefined;
    }
    return this.memory.reduce((a, b) => a / b);
  };
  this.addNumbers = (a, b) => this.memory.push(a, b);
}
const calc = new Calculator();
calc.addNumbers(1, 2);
calc.addNumbers(4, 1);
console.log(calc.sum(), calc.sub(), calc.mul(), calc.div());

//Zadanie 4

function Ladder(position, direction, howmany){
  this.position = position;
  this.direction = direction; //|(-1):na dół|(0):stoi|(1):do góry
  this.howmany = howmany;
  
  this.move = function(){
    let move = position + (direction*howmany);
    position = move + position;
  }
  this.showpos = function(){
    let pos = position;
    console.log(pos);
  }
}
const ladder = new Ladder(1,1,1);
ladder.showpos()
console.log(ladder.showpos());
