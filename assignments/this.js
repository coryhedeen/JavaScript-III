/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: The default value of "this," in the global scope, is the window
* 2. Implicit: "this" refers to the object left of the dot.
* 3. New: when a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit: bind, call, or apply methods can be used to define "this."
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const thisIs = {
  name: 'Girl',
  age: 21,
  phrase: function(thing){
    console.log(`You can call me ${this.name}, would you like a ${thing}`);
  }
};

thisIs.phrase('couch?');
// Principle 3

// code example for New Binding
function Person(attributes) {
  this.name = attributes.name;
  this.hair = attributes.hair;
  this.age = attributes.age;
  this.greet = function (name){
    return `Hello, my name is ${this.name}`;
  }
};

let girl = new Person ({
  name: 'Susie',
  hair: 'black',
  age: 52

});

girl.greet()
// Principle 4

// code example for Explicit Binding
function Customer(person) {
  this.height = "6ft";
  this.person = person;
  this.test = function(){
    console.log(`${this.person} is ${this.height} tall.`)
  };
}

const guy = new Customer('James')

guy.test.apply('Larry')
