// Get the button element
const button = document.getElementById("choosepln1");
const button2 = document.getElementById("choosepln2");

// Add an event listener to the button
button.addEventListener("click", function () {
  //fill contact form with information
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  // Scroll to the contact form section
  const contactForm = document.getElementById("contact-form");
  contactForm.scrollIntoView({ behavior: "smooth" });

  // Fill form fields
  subjectInput.value = "$50 Plan";
  messageInput.value =
    "Hello YahwehBoy, I will like to know about this plan $50.";
});

// Add an event listener to the button2
button2.addEventListener("click", function () {
  // Fill contact form with information
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const contactForm = document.getElementById("contact-form");
  contactForm.scrollIntoView({ behavior: "smooth" });

  // Fill form fields
  subjectInput.value = "$150 Plan";
  messageInput.value =
    "Hello YahwehBoy, I will like to know about this plan $150.";
});

//to download resume
document
  .getElementById("download-resume")
  .addEventListener("click", function () {
    var resumeUrl = "resume.pdf";
    var a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "resume"; // file name
    a.click();
  });
