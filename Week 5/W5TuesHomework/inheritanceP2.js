
/*********************************************************Exporting A Module**************************************************************************/

// Option A: Set properties on the module.exports object
// classes.js

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
module.exports.Book = Book;
module.exports.Movie = Movie;


/***********************************************Option B: Assigning an object to the module.exports property*************************************/

// classes.js

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
module.exports = {
  Book,
  Movie
};

/************************************************************Option C: The exports shortcut*************************************************************/
// it's important to note that you
//  can't use the exports variable if
//  you want to assign a new object.
// That's because it will break the
// linkage to module.exports.

// classes.js

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
exports.Book = Book;
exports.Movie = Movie;


/*************************************************************Importing from a Module*******************************************************************/
// the code for the application's entry point, index.js, could look like this:

// index.js

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

// If you attempted to run your application using the command node index.js, you'd receive the following error:

// ReferenceError: Book is not defined

// You're attempting to instantiate an instance of the Book class,
//  but that class is defined in the classes module (defined by classes.js),
//  not the index module (the module defined by the index.js file).


/****************************************************************The Require Function********************************************************************/

// The index module is dependent upon the Book and Movie classes,
// so you need to import them from the classes module.

const classes = require("./classes");

// When importing a local module, you pass to the require() function a path to the module: ./classes.
//// You can optionally include the .js file extension after the module name, but most of the time it's omitted.

// Then to make your code easier to read, declare constants for the two properties that you are using from the classes module.

const Book = classes.Book;
const Movie = classes.Movie;

/***************************************Putting it all together in the index module (index.js file) looks like this.***********************************/

// index.js

// Use the `require()` function to import the `classes` module.
const classes = require("./classes");

// Declare variables for each of the properties
// defined on the `classes` object.
const Book = classes.Book;
const Movie = classes.Movie;

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

/********************************************************Simplifying imports using destructuring ******************************************************/

// You can use destructuring to condense that code to a single statement:

const { Book, Movie } = require("./classes");

// Which would replace all of this:

// Use the `require()` function to import the `classes` module.
const classes = require("./classes");

// Declare variables for each of the properties
// defined on the `classes` object.
const Book = classes.Book;
const Movie = classes.Movie;
