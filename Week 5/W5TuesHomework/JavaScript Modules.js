
// Regardless of where the this keyword is used,
// it always references the instance object (the
//  object created using the new keyword). This
//  behavior allows the constructor() method in
//  a class—child or parent—to initialize properties
//  on the instance object. It also gives access to
//  instance object properties from within any instance
//  method, regardless of whether the method is defined
//  in a child or parent class.

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


//  Method overriding is when a child class provides an implementation
//  of a method that's already defined in a parent class. This is a form
//  of polymorphism.

// Taking advantage of how delegation works in JavaScript, to override a
//  method in a parent class, you can simply define a method in a child
//  class with the same method name:

class Movie extends CatalogItem {
  constructor(title, series, director) {
    super(title, series);
    this.director = director;
  }

  getInformation() {
    // TODO Implement this method!
  }
//  You can think of the getInformation()
//  method that's defined in the Movie class as
//  "shadowing" or "hiding" the getInformation()
//  method that's defined in the CatalogItem class.
}

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
