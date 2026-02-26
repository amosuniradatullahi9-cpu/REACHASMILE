// =========================
// Collapsible Account Section
// =========================
function toggleAccount() {
    const panel = document.getElementById('donate-panel'); // collapsible panel
    const btn = document.querySelector('.toggle-btn');     // the toggle button

    if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
        // Collapse the panel
        panel.style.maxHeight = "0";
        btn.textContent = "Show Account Details";
    } else {
        // Expand the panel to its scrollHeight
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.textContent = "Hide Account Details";
    }
}

// =========================
// Copy Account Number
// =========================
function copyAccount() {
    const accountNumber = document.getElementById('account-number').innerText;
    navigator.clipboard.writeText(accountNumber)
        .then(() => {
            alert('Account number copied! You can now paste it in your bank app.');
        })
        .catch(() => {
            alert('Failed to copy. Please copy manually.');
        });
}

// =========================
// Optional: Smooth Scroll for Anchor Links (if you add any)
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});