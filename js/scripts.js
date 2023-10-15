// Wait for the DOM to be fully loaded before running the JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // constants for query selector
  const idParagraph = document.getElementById("myStudentId");
  const numberInput = document.getElementById("customNumber");
  const customColorButton = document.querySelector(".custColor");
  const randomColorButton = document.querySelector(".randColor");
  const imageDropdown = document.getElementById("imageSelect");
  const imageContainer = document.getElementById("images");

  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

  // event listeners for on click event of buttons and select
  customColorButton.addEventListener("click", applyCustomColor);
  randomColorButton.addEventListener("click", applyRandomColor);
  imageDropdown.addEventListener("click", populateList);

  // event listeners for on change event of select
  imageDropdown.addEventListener("change", updateImage);

  // function to change bg color from user input and add student id
  function applyCustomColor() {
    idParagraph.innerText = "200544014";
    const num = parseInt(numberInput.value);
    document.body.style.backgroundColor = determineColor(num);
  }

  // function to change bg color from random no.
  function applyRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = determineColor(randomNum);
  }

  function determineColor(num) {
    if (num < 0 || num > 100) return "red";
    if (num <= 20) return "green";
    if (num <= 40) return "blue";
    if (num <= 60) return "orange";
    if (num <= 80) return "purple";
    return "yellow";
  }

  // function to generate options for select list
  function populateList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    if (imageDropdown.children.length - 1 < images.length) {
      // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
      images.forEach((image, idx) => {
        const optionElement = document.createElement("option");
        optionElement.value = image;
        optionElement.innerText = `Image ${idx + 1}`;
        imageDropdown.appendChild(optionElement);
      });
    }
  }

  // function to change image
  function updateImage() {
    const selectedImage = imageDropdown.value;
    if (selectedImage) {
      imageContainer.src = "./img/" + selectedImage;
    }
  }
});
