
/*******************************************Step 1: Create a good folder structure ******************************************************************/

/**********************************Step 2: Move (or write) code for each class in its own file ******************************************************/

// copy and paste the code for the CatalogItem class from one module to the other:

// classes/catalog-item.js

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

// For any module that contains or exports a single item,
// you can simply assign that item to the module.exports property directly.

// classes/catalog-item.js

class CatalogItem {
  // Contents removed for brevity.
}

// Export one class
module.exports = CatalogItem;

// Next, move the Book class from the classes module to the book module,
// copying and pasting the code for the Book class from one module to the other.
//  Remember to export it at the end.

// classes/book.js

class Book extends CatalogItem {
  constructor(title, series, author) {
    super(title, series);
    this.author = author;
  }
}

// Export one class
module.exports = Book;

// You can import the CatalogItem class using the require() function,
//  declaring and initializing a variable for the single item that's exported from the module:

// classes/book.js

const CatalogItem = require("./catalog-item");

class Book extends CatalogItem {
  // Contents removed for brevity.
}

// Export one class
module.exports = Book;

// Now you're ready to move the Movie class from the classes module to the movie module.

// END RESULT:

// classes/movie.js

const CatalogItem = require("./catalog-item");

class Movie extends CatalogItem {
  constructor(title, series, director) {
    super(title, series);
    this.director = director;
  }

  getInformation() {
    let result = super.getInformation();

    if (this.director) {
      result += ` [directed by ${this.director}]`;
    }

    return result;
  }
}

// Export one class
module.exports = Movie;


/*******************************************************Step 3: Clean up ****************************************************************************/

// After moving the classes to their own modules, you can safely remove the classes module by deleting the classes.js file.

/***********************************************Step 4: Set up the right dependencies*****************************************************************/

// The index module needs to import the Book and Movie classes from the new modules:

// Require the two modules separately
const Book = require("./classes/book");
const Movie = require("./classes/movie");

const theGrapesOfWrath = new Book(
  "The Grapes of Wrath",
  null,
  "John Steinbeck"
);
const aNewHope = new Movie(
  "Episode 4: A New Hope",
  "Star Wars",
  "George Lucas"
);

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars) [directed by George Lucas]


/****************************************************Step 5:Verify it's working right*******************************************************************/


/*****************************************************Understanding module loading**********************************************************************/

// Node will examine the identifier passed to the require() function to determine if the module is a local, core, or third-party module:

// -- Local module = identifier starts with ./, ../, or /

// -- Node.js core module = identifier matches a core module name

// -- Third-party module = identifier matches a module in the node_modules folder
