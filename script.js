// Get elements
const popupContainer = document.getElementById("popupContainer");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const okayBtn = document.getElementById("okayBtn");

// Open popup
openPopupBtn.addEventListener("click", () => {
    popupContainer.style.display = "flex";
});

// Close popup with the "Close" button
closePopupBtn.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

// Optional: Add an event for the "Okay" button if needed
okayBtn.addEventListener("click", () => {
    alert("Okay button clicked!");
    // You can add other actions here without closing the popup
});
