# this
#javascript/fundamentals
https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth

## this in the Global Context
When used in the global context (outside of any function) this  refers to the **global object**(window)
`this === window`
`true`

In node, `this === module.export`

## this in the function calls
Without using **constructor functions** or **classes** *this* is referring to global, which is usually not the desired result. 

`"use strict"` is useful here because it stops us

## this in Contructor calls / Classes
In JavaScript, there are no special constructor functions. Instead, a function call can turn into a constructor call when that function is called with the new operator in front of it.

When a function is called as a constructor, a new object is created and set as the function's *this* argument. 

This object is then returned implicitly from the function if no other object is returned explicitly. (Just image a `return this` at the bottom)

## this in method calls
When a function is called as a method of an object, that function's this argument is set to the object the method is called on. That object is called the receiver of the function call.

e.g: person is the receiver of the method call
```javascript
const person = {
  firstName: "John",
  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

person.sayHi() //Hi, my name is John! 
```

Doesn’t matter if function is defined outside
```javascript
const person = {
  firstName: "John",
}

function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`)
}

person.sayHi = sayHi
person.sayHi()  //Hi, my name is John! 
```

The most immediate property before the method, so here foo.bar doesn’t effect it 
`foo.bar.person.sayHi()`

Oftentimes, the receiver gets lost when we invoke a method as a function. This happens particularly often when passing a method as a callback to another function.
```javascript
const greet = person.sayHi;
greet(); // Hi, my name is undefined
```

Can work around these problems using wrapper functions or the bind method.
```javascript
const greet = function() {
  person.sayHi()
} 
greet() // Hi, my name is John!

// or bind, ties our this to a specific object
const greet = person.sayHi.bind(person);
greet(); // Hi, my name is John
```

```javascript
setTimeout(function() {
  person.sayHi()
}, 1000}

// or bind, ties our this to a specific object
setTimeout(person.sayHi.bind(person), 1000} 
```

## this using .call() or .apply()
A function's this argument is usually set implicitly, depending on how the function is called. Ordinary function calls, method calls, and constructor calls all lead to a different this value.

We can also call a function with an explicit this argument using Function.prototype.call() or Function.prototype.apply(). Both methods accept a thisArg as their first parameter and a variable number of additional arguments.

```javascript
const person = {
  firstName: "Jane",
  lastName: "Doe"
}

function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`)
}

sayHi.call(person) // Hi, my name is Jane
sayHi.apply(person) // Hi, my name is Jane
```

Difference is how they take their arguments
```
const numbers = [10,20,30,40,50]

const slice1 = numbers.slice(1, 4)
const slice2 = numbers.slice.call(numbers, 1, 4)
const slice3 = numbers.slice.call(numbers, [1, 4])

// (c)all => (c)omma
// (a)pply => (a)rray
```

## Hard-bind a functions this value with .bind()
The Function.prototype.bind() method lets us permanently tie a function's this argument to a specific value. It creates a new bound function that calls the original function with the provided this argument, no matter how that bound function is called.

In this lesson we'll see how to use the bind() method. To better understand how it works, we'll implement a naive version of bind() ourselves.

## Capture this with an arrow function
	- arrow functions take its outer execution context’s this
Arrow functions are not only syntactically different from other JavaScript functions, but they also have special this behavior. An arrow function doesn't have its own this. Instead, it uses the this value from its enclosing execution context.

When an arrow function is created, it permanently captures the surrounding this value. Neither call() nor apply() can change the this value later. Additionally, arrow functions cannot be used as constructors.

```javascript
const counter = {
  count: 0,
  incrementPeriodically() {
      setInterval(() => {
          console.log(++this.count);
      }, 1000);
  }
};

counter.incrementPeriodically();  // Works!! 1,2,3,4...
```
If it was a not an arrow function then would use the global this

## this in class bodies
Within the constructor of a class, this refers to the newly created object. Within a method, however, this might refer to another value if the method is called as an ordinary function. Just like any other object method, class methods can lose their intended receiver this way.

Can bind the **sayHi** method within the **constructor** of the **class**. That way don’t have to manually bind to person:  `const greet = person.sayHi.bind(person)`

```javascript
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName

		this.sayHi = this.sayHi.bind(this)
	}
	sayHi() {
		console.log(`Hi, my name is ${this.firstName}!`)
	}
}

const person = new Person(“John”, "Doe")
const greet = person.sayHi
greet()
```


1 CommentCollapse