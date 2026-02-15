const form = document.getElementById("loanForm");
const successMessage = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", () => {

    if (successMessage) {
      successMessage.style.display = "block";
      successMessage.innerText = "Submitting application...";
    }

    const button = form.querySelector("button");
    button.disabled = true;
    button.innerText = "Processing...";

    // DO NOT redirect here.
    // Backend will redirect after saving.
  });
}
