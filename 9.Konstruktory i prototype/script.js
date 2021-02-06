//Zadanie1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Krzysztof', 'Duda', 31, 'Poland', 'Bydgoszcz', 'polish');
const personB = new Person('Janusz', 'Malina', 29, 'Poland', 'Warsaw', 'polish');
const personC = new Person('Magda', 'Mars', 19, 'Poland', 'Kraków', 'polish');
const personD = new Person('Julia', 'Michnik', 32, 'Poland', 'Tarnów', 'polish');
const personE = new Person('Stefan', 'Wodnik', 40, 'Poland', 'Gdynia', 'polish');

personB.newAge(52);
personE.newAge(20);
personA.newCity("Poznań");

console.log(personA);
console.log(personB);
console.log(personE);

//Zadanie2

class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

//Zadanie3

class Game{
    random() {
        Game.prototype.x = setInterval(function(){Game.prototype.number = Math.round(Math.random() * (10 - 1) + 1);}, 1000);
    }
    win() {
      Game.prototype.winInterval= setInterval(function(){
          if (Game.prototype.number > 5) {
          console.log('Win')
          clearInterval(Game.prototype.x);
          clearInterval(Game.prototype.winInterval);       
          } else {
          console.log('Not Today My Friend')
        }}, 1000);
    }
  }
  const game = new Game();
  const gameA = new Game();
  
  game.random();
  gameA.win();
