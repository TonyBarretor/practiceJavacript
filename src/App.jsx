

function App () {


//THIS KEY WORDDDDDDDDDDDD
//'this' reference to the current object, but that always dont work like that
//'this' value is determined how the function is called
const persona = {
  name: 'Mosh',
  walk() {
    console.log(this);
  }
};

persona.walk(); //here walk() is a function called as a method, this will return a reference to the Object 'persona'

const walk = persona.walk; //this is calling to reference the function 'walk' in this line
//Remember to call a method use the parenthesis () after the method name

console.log(walk);
walk(); //calling the function as a standalone object or outside of an object, this will return the global object called Window object, because we are in react there is no window object so we get undefined because of the STRICT MODE (run javascript safely)


}




export default App
