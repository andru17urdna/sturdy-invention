
// js to print the clicked div's ID to the console
// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", event => {
    // Add a click event listener on the document’s body
    document.body.addEventListener("click", event => {
      // console.log the event target’s ID
      console.log(event.target.id);
    });
  });
