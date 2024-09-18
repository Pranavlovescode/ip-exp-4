// Using Object Literal
var person ={
    name: 'John',
    age: 25,
    greet: function(){
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

person.greet(); // Hello, my name is John and I am 25 years old.
console.log(person.name, person.age); 

// Using Object Constructor
var person2 = new Object();
person2.name = 'Jane';
person2.age = 30;
person2.greet = function(){
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
}
person2.greet(); // Hello, my name is Jane and I am 30 years old.
console.log(person2.name, person2.age);

// Using class keyword
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

var person3 = new Person('Mike', 35);
person3.greet(); // Hello, my name is Mike and I am 35 years old.
console.log(person3.name, person3.age);

// Constructor function
function Person2(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

var person4 = new Person2('Alice', 40);
person4.greet(); // Hello, my name is Alice and I am 40 years old.
console.log(person4.name, person4.age);