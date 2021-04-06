// Imagine that you recently started a new project developing
// an application to track your local library's catalog of books and movies.

class Book {
    constructor(title, series, author) {
      this.title = title;
      this.series = series;
      this.author = author;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

//The movie class contains and behaves just like the Book.getInformation() method

  class Movie {
    constructor(title, series, director) {
      this.title = title;
      this.series = series;
      this.director = director;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
const aNewHope = new Movie('Episode 4: A New Hope', 'Star Wars', 'George Lucas');


//The code above isn't dry

// Inheritance is when a class is based upon another class. When a class inherits
// from another class, it gets access to its properties and methods.

// Here's what the implementation for the CatalogItem parent class looks like:

class CatalogItem {
    constructor(title, series) {
      this.title = title;
      this.series = series;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

//  Now you need to update the Book and Movie classes to inherit from the CatalogItem parent class.

// To indicate that the Book class inherits from the CatalogItem class,
// add the extends keyword after the class name followed by the name of the parent class:
  class Book extends CatalogItem {
// Update the child's constructor to invoke the parent's constructor:
    constructor(title, series, author) {
      this.title = title;
      this.series = series;
      this.author = author;
// Some languages require super() to be the first line inside
//  the constructor method of a child class. Most of the time
//  it is good practice to put it first, so you don't accidentally forget it.
    }
// Remove duplicate code
//  since the getInformation() is defined in the CatalogItem parent class,
//  the getInformation() method can be safely removed from the Book class:
    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

//The Resulting code will look like below:
class Book extends CatalogItem {
    constructor(title, series, author) {
      super(title, series);
      this.author = author;
    }
  }

//Repeat for the other child classes

class Movie extends CatalogItem {
    constructor(title, series, director) {
      super(title, series);
      this.director = director;
    }
  }


/****************************************** This is the above corrected code in its entirety *******************************************************/
/************************************************Comment out the above code to test*****************************************************************/

class CatalogItem {
    constructor(title, series) {
      this.title = title;
      this.series = series;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

  class Book extends CatalogItem {
    constructor(title, series, author) {
      super(title, series);
      this.author = author;
    }
  }

  class Movie extends CatalogItem {
    constructor(title, series, director) {
      super(title, series);
      this.director = director;
    }
  }

  const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
  const aNewHope = new Movie('Episode 4: A New Hope', 'Star Wars', 'George Lucas');

  console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
  console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars)

/*********************************************Continued in InheritanceP2*******************************************************************************************************/
