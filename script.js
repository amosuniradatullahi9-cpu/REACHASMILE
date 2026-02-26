const button = document.querySelector(".toggle-btn");
const box = document.getElementById("account-details");

button.addEventListener("click", function () {
    box.classList.toggle("show");

    if (box.classList.contains("show")) {
        button.textContent = "Hide Account Details";
    } else {
        button.textContent = "Show Account Details";
    }
});
