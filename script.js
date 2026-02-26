function toggleAccount() {
    const box = document.getElementById("account-details");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}
