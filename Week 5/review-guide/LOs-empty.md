# Week 5 Learning Objectives

## JavaScript Classes

  1. Declare a class in JavaScript.

          Class naming convention uses a capital letter

  2. Implement a constructor method in a JavaScript class.

          class Con {
          constructor(parameter, parameter) {
            this.stuff = stuff
            }
          }

  3. Define an instance method on a class.

          Initialize a variable to define an instance we use the new keyword, then the class name capitalized and any parameters that we need for that class.

  4. Define a static method on a class.

          Preface it with static keyword
          static function Name()
          only the parent class can use the static class.
          the instances of the parent class cannot use that method.

          ex.
          Class McDonalds {
            constructor() {

            }
          static totalNumOf() {

            }
          }

          McDonalds.totalNumOf()




  5. Instantiate an instance of a class using the new keyword.

          const example = new McDonalds()
            - making a copy of the McDonalds object
            - optionaly pass in parameters
            - `this` Points to the new instance of the class

  6. Implement inheritance using the ES6 extends syntax for an ES6 class.

           ChildClass extends ParentClass{
             constructor(childName, parentName, dogName){
               super (childName, parentName);
               this.dogName = dogName;
             }
             super.someMethod() {doesstuff}
           }



  7. Utilize the super keyword in a child class to inherit from a parent class.

          see animals.js

  8. Utilize module.exports and require to import and export functions and class from one file to another.

            export:
          module.exports = ClassName

            import:
          const ClassName = require("./somewhere.js")

          look at wilsons document



## Object-Oriented Programming

  1. Conceptual understanding of OOP

          Before OOP there was procedural program approach.
          - Breaks things up and makes a web of logic
            - Good for building an infrastructure that can be    scaled


  2. Basic design principles for OOP
  - approach for breaking down large, complex products into simple solutions
  - smaller parts can be implemented and tested separately
  - results in higher confidence in overall solution
  - makes it easier to pinpoint issues with code

     - Step 1 - Identify potential classes
     - Step 2 - Specify properties and methods
     - Step 3 - Define relationships
     - Step 4 - Document your decisions


  3. Three pillars of OOP

- Inheritance
  - Implementation Inheritance
    - Where given an object, code can invoke methods on the object defined on parent classes. When creating an instance of an object that object can inherit the parents logic, all the methods, all the properties.

- Polymorphism
  - a child can override the methods of its parent to do something slightly different.
- Encapsulation
   - child abstraction
- Abstraction

        Abstraction hides complexity by giving you a more abstract picture, a sort of 10,000 feet view, while Encapsulation hides internal working so that you can change it later. In other words, Abstraction hides details at the design level, while Encapsulation hides details at the implementation level.


4. The Law of Demeter applied to OOP


- stranger danger.
- just don't use more than one dot, not including the dot after `this.something.`
  - No more than 2 but 1 is prefered `this.something.BadExample`
- the Law of Demeter is really about a class knowing about other classes

        Each unit should have only limited knowledge about other  units: only units "closely" related to the current unit.
        Each unit should only talk to its friends; don't talk to  strangers.
          Only talk to your immediate friends.

  5. SOLID principles of OOP (not tested on)

- S - Single-responsiblity Principle
- O - Open-closed Principle
- L - Liskov Substitution Principle
- I - Interface Segregation Principle
- D - Dependency Inversion Principle
