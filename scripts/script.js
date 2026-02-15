const form = document.getElementById("loanForm");
const successMessage = document.getElementById("successMessage");
const phoneInput = document.getElementById("phoneInput");


// FORCE NUMBER START WITH 7
if (phoneInput) {
  phoneInput.addEventListener("input", () => {

    // remove non-numbers
    phoneInput.value = phoneInput.value.replace(/\D/g, "");

    // must start with 7
    if (!phoneInput.value.startsWith("7")) {
      phoneInput.value = "7";
    }

    // max length 9 digits
    if (phoneInput.value.length > 9) {
      phoneInput.value = phoneInput.value.slice(0, 9);
    }
  });
}


// SUBMIT UI
if (form) {
  form.addEventListener("submit", () => {

    if (successMessage) {
      successMessage.style.display = "block";
      successMessage.innerText = "Submitting application...";
    }

    const button = form.querySelector("button");
    button.disabled = true;
    button.innerText = "Processing...";
  });
}
