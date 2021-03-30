
//Creating new DOM elements
const addElement = () => {
    // create a new div element
    const newElement = document.createElement("h1");

    // set the h1's id
    newElement.setAttribute("id", "sleeping-giant");

    // and give it some content
    const newContent = document.createTextNode("Jell-O, Burled!");

    // add the text node to the newly created div
    newElement.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);
  };
  // run script when page is loaded
  window.onload = addElement;

  //We should see jello burled on our page. Using inspect we should see the new h1 id


//----------------------------------------------------



//Inserting Elements in JS File and Script Block
  const addElements = () => {
    // create a new div element
    const newElement = document.createElement("h1");

    // set the h1's id
    newElement.setAttribute("id", "sleeping-giant");

    // and give it some content
    const newContent = document.createTextNode("Jell-O, Burled!");

    // add the text node to the newly created div
    newElement.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);

    // append a second element to the DOM after the first one
    const lastElement = document.createElement("div");
    lastElement.setAttribute("id", "lickable-frog");
    document.body.appendChild(lastElement);
  };
  // run script when page is loaded
  window.onload = addElements;

// Upon inspection you should see two elements in the body, the h1 and the div added via javascript


//----------------------------------------------------------------------------

//Adding a CSS Class After DOM Load Event

window.addEventListener("DOMContentLoaded", event => {
    document.body.className = "i-got-loaded";
  });

//upon inspection the body element now has a class of "I-got-loaded"



