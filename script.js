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


// Upload Profile Picture
let photoUpload = document.getElementById("photoUpload");
let profilePic = document.getElementById("profilePic");

photoUpload.addEventListener("change", function () {
  let file = this.files[0];

  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});


// Upload Certificates
let certUpload = document.getElementById("certUpload");
let certList = document.getElementById("certList");

certUpload.addEventListener("change", function () {
  certList.innerHTML = "";

  Array.from(this.files).forEach((file) => {
    let div = document.createElement("div");
    div.classList.add("cert-item");
    div.innerHTML = `<b>${file.name}</b><br><small>${(file.size / 1024).toFixed(2)} KB</small>`;
    certList.appendChild(div);
  });
});


// Contact Button Message
function showMessage() {
  let msg = document.getElementById("messageText");
  msg.innerHTML = "✨ Thank you for visiting! Contact request sent successfully.";
}
