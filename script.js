// Typing Animation
let textArray = [
  "1st Year Pharmacy Student 💊",
  "Future Pharmacist 🚀",
  "Healthcare Enthusiast 🧬",
  "Medicine & Science Explorer 🔬"
];

let typingText = document.getElementById("typingText");
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = textArray[index];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Contact Button Message
function showMessage() {
  let msg = document.getElementById("messageText");
  msg.innerHTML = "✨ Thank you for contacting me! I will respond soon.";
}
