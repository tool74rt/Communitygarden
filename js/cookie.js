document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById("cookieConsentPopup");
    const acceptButton = document.getElementById("acceptCookies");

    // Show the popup after a delay
    setTimeout(() => {
        cookiePopup.style.display = "block";
    }, 1000); // Show after 1 second

    // Hide the popup when the button is clicked
    acceptButton.addEventListener("click", function() {
        cookiePopup.style.display = "none";
        // You can also set a cookie here to remember the user's choice
    });
});