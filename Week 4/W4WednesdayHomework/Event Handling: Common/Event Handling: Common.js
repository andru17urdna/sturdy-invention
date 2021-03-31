//HANDLING A BUTTON CLICK EVENT
// This function adds the counter for our button in the html file

 window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("increment-count");
    const count = document.getElementById("clicked-count");
    let clicks = 0;
    button.addEventListener("click", event => {
      clicks += 1;
      count.innerHTML = clicks;
    });
  });


// This is the onclick version of the above function
    //   let clicks = 0;
    // button.onclick = event => {
    //   clicks += 1;
    //   count.innerHTML = clicks;
    // };


//By using the function below along with the html code below it
// you can build this straight into the HTML mark up.

//This way suffers from all the problems that the onclick property
// suffers from with the additional problem of relying on the global
// window.event object.It's a very messy approach and generally should be avoided.

//     function clickHandler(event) {
//         clicks += 1;
//         count.innerHTML = clicks;
//       }

// <button onclick="clickHandler(event)"/>
//------------------------------------------------------------------------

//Handling a checkbox check event

//Creates the Extra Cheese checkbox

// window.addEventListener("DOMContentLoaded", event => {
//     // store the elements we need in variables
//     const checkbox = document.getElementById("on-off");
//     const divShowHide = document.getElementById("now-you-see-me");
//     // add an event listener for the checkbox click
//     checkbox.addEventListener("click", event => {
//       // use the 'checked' attribute of checkbox inputs
//       // returns true if checked, false if unchecked
//       if (checkbox.checked) {
//         // if the box is checked, show the div
//         divShowHide.style.display = "block";
//         // else hide the div
//       } else {
//         divShowHide.style.display = "none";
//       }
//     });
//   });



//If we had a whole page of checkboxes with extra options
//We use this function in tandem with CSS; display:block & display:none
//   we need to wait for the stylesheet to load
window.onload = () => {
    // store the elements we need in variables
    const checkbox = document.getElementById("on-off");
    const divShowHide = document.getElementById("now-you-see-me");
    // add an event listener for the checkbox click
    checkbox.addEventListener("click", event => {
      // use the 'checked' attribute of checkbox inputs
      // returns true if checked, false if unchecked
      if (checkbox.checked) {
        // if the box is checked, show the div
        divShowHide.classList.remove("hide");
        divShowHide.classList.add("show");
        // else hide the div
      } else {
        divShowHide.classList.remove("show");
        divShowHide.classList.add("hide");
      }
    });
  };


// --------------------------------------------------------------

// HANDLING USER INPUT VALUE

// Makes backgound cyan
// run when the DOM is ready
window.addEventListener("DOMContentLoaded", event => {
    const stopCyanMadness = () => {
      // get the value of the input field
      const inputValue = document.getElementById("stopper").value;
      // if value is anything other than 'STOP', change background color
      if (inputValue !== "STOP") {
        document.body.style.backgroundColor = "cyan";
      }
    };
    setTimeout(stopCyanMadness, 5000);
  });
