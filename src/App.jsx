

function App () {

// LET VS CONST - use in ES6
// VAR - you can acces from outside the block
//LET - only can access inside the block


  /* function sayHello() {
  for (let i = 0; i < 5; i++) { //ONLY Use let if you need to reassing the variable
    console.log(i);
  }

  console.log(i);
  
}

sayHello(); */

// const is used to assign values to a variable but its value
//will be CONSTANT
/* const x = 1;
x = 2; */

// OBJECTSSSSSSSSSSSSS
// It is a collection of value pairs

const person = {
  name: 'Pika', //property
  //walk: function() {} //When a function is inside an object is called METHOD
//above is an old way to set up a method

//This is ES6 way to set a method
  walk() {},
  talk() {},
};

//THERe is 2 ways to access those members

//Dot notation
person.talk(); //dot notation - Use when you know what property you are going to use
person.name = 'Graciela';

//Braket notation 
person['name'] = 'John'; //braket notation - use this when you dont know ahead of time what property or method to we are going to access
//What goes inside the brackets determine what property or member you are going to use

const targetMember = 'name'; //Imagine targetMember is a field to fill in a form
person[targetMember.value] = 'Goku'; //so you can access writing inside the brackets the property or method 

//THIS KEY WORDDDDDDDDDDDD

const persona = {
  name: 'Mosh',
  walk() {
    console.log(this);
  }
};

persona.walk();

}




export default App
