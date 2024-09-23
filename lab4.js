// Alert Me Functionality
function alertMe() {
    const nameInput = document.getElementById("name").value;
    if (nameInput) {
      alert(`Hi ${nameInput}!`);
    }
  }
  
  // Change Color Functionality
  let isBlue = true;
  function changeColor() {
    if (isBlue) {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
  }
  
  // Validate Text Functionality
  function validateText() {
    const textInput = document.getElementById("text").value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
      alert("Text contains special characters!");
    } else {
      alert("Text is valid!");
    }
  }
  
  // Add Text Functionality
  function addText() {
    const heading = document.getElementById("main-heading");
    heading.innerHTML += " Add Text";
  }
  