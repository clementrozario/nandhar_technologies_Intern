// 1. What is the correct way to define a class in JavaScript?
// a) function MyClass() {}
//  b) class MyClass {}
//  c) create class MyClass {}
//  d) define class MyClass {}

// option b class myClass{} this is the syntax in javascript

// 2. What keyword is used to create a new instance of a class?
// a) new
//  b) create
//  c) this
//  d) instance

// option a new is used to create an instance 
// eg:
// const anyname = new className(if any);
// anyname.method();

// 3. What does the constructor method do in a class?
// a) Adds a method to the class
//  b) Creates the class
//  c) Initializes the object when it's created
//  d) Destroys the object

// option c : c) Initializes the object when it's created
// so when an constructor is called we can initilize the objects we can initilize by using this keyword so the this keyword is used to inherit the objects we created across different methods.

// 4. What will be the output of the following code?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const p = new Person("John");
// console.log(p.name);

// a) undefined
//  b) John
//  c) Person
//  d) null

// Option b:John

// 5. Which keyword is used to inherit from another class?
// a) extends
//  b) inherits
//  c) super
//  d) from

// option a:extends
// so we can create another class 
// eg:class newClass extends oldclass{}
// by this we can inherient the objects of the parent class

// 6. What does the super() function do in a subclass constructor?
// a) Destroys the parent class
//  b) Calls the parent class constructor
//  c) Refers to the current class
//  d) Initializes private variables

// option b) calls the parent class constructor 
// so that we can reuse it without the need to create new objects again

// 7. What will be the output of this code?
// class Animal {
//   speak() {
//     return "I am an animal";
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return "I bark";
//   }
// }

// const d = new Dog();
// console.log(d.speak());

// a) I bark
//  b) I am an animal
//  c) undefined
//  d) Error

// option a: I bark
// because the code called the subclass in that subclass it does't call any partent class and simply returns a string although both have same methods speak we call the subclass so it over rides the parent class

// 8. Can you define methods outside the constructor in a class?
// a) No
//  b) Yes, but only static methods
//  c) Yes
//  d) Only in ES5

// option c yes because methods are always outside the constructor but indie the class even for static methods too

// 9. What is the purpose of this keyword inside a class?
// a) Refers to the global object
//  b) Refers to the current instance of the class
//  c) Refers to the parent class
//  d) Refers to the class itself
// 
// option b referes to the current instances of the class

// 10. What is the correct way to add a method in a class?
// a)
// class Car {
//   drive = function() {
//     console.log("Driving");
//   }
// }

//option  b)
// class Car {
//   function drive() {
//     console.log("Driving");
//   }
// }

// c)
// class Car {
//   drive() {
//     console.log("Driving");
//   }
// }

// d)
// class Car {
//   method drive() {
//     console.log("Driving");
//   }
// }

// option c