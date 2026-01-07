const form = document.getElementById("loanForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function () {
    // Show styled success message
    successMessage.style.display = "block";

    // Disable button to prevent double submit
    const button = form.querySelector("button");
    button.disabled = true;
    button.innerText = "Submitting...";

    // Redirect after short delay
    setTimeout(() => {
        window.location.href = "/success.html";
    }, 2000);
});
