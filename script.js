document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".toggle-btn");
    const accountBox = document.getElementById("account-details");

    button.addEventListener("click", function () {
        // toggle the class
        accountBox.classList.toggle("show");

        // change button text
        if (accountBox.classList.contains("show")) {
            button.textContent = "Hide Account Details";
        } else {
            button.textContent = "Show Account Details";
        }
    });
});
