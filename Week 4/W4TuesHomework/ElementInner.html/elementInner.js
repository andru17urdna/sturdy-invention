

// generate a random number for each list item
const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // listen for DOM ready event
  window.addEventListener("DOMContentLoaded", event => {
    // push 6 LI elements into an array and join
    const liArr = [];
    for (let i = 0; i < 6; i++) {
      liArr.push("<li>" + getRandomInt(10) + "</li>");
    }
    const liString = liArr.join(" ");

    // insert string into the DOM using innerHTML
    const listElement = document.getElementById("your-worst-enemy");
    listElement.innerHTML = liString;
  });

//You should see six new list items on the page, each containing a random number.


// ---------------------------------------------------------------------------------

// In our Javascript file, we'll use the Date constructor to instantiate a new Date object.

window.addEventListener("DOMContentLoaded", event => {
    const title = document.getElementById("title");
    const time = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();

      title.innerHTML = hours + ":" + minutes + ":" + seconds;
    };
    setInterval(time, 1000);
  });

// Using inspect open the <head> and <title>
// Observe the clock we inserted dynamically keeping the current time in your document title!
