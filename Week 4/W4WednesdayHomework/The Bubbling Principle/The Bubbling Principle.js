

// Stopping event bubbling with stopPropagation()

// window.addEventListener('DOMContentLoaded', event => {
//     document
//       .querySelector('video')
//       .addEventListener('click', event => {
//         event.stopPropagation();
//         video.play();
//       });
//   });


// This function works for the <ul> inside of the html document
window.addEventListener('DOMContentLoaded', event => {
    document
      .getElementById('my-list')
      .addEventListener('click', e => {
        // will print out "This is list item X"
        // depending on which list item is clicked
        console.log(e.target.innerHTML);

        // always prints "my-list"
        console.log(e.currentTarget.id);
      });
  });
