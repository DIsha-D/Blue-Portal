// dashboard.js - Main dashboard script

// This event listener ensures that the code inside runs only after the
// entire HTML document has been completely loaded and parsed.
window.addEventListener('DOMContentLoaded', async () => {
    console.log("Dashboard DOMContentLoaded."); // Debug log
    
    // --- Franchisee Credit Limit Modal Logic (Now directly in main script) ---
    const franchiseeModalElement = document.getElementById("franchiseeCreditLimitModal");
    const franchiseeCloseBtnElement = document.getElementById("franchiseeModalCloseBtn");
    const franchiseeCancelBtnElement = document.getElementById("franchiseeCancelBtn");
    const franchiseePaymentBtnElement = document.getElementById("franchiseePaymentBtn");

    if (franchiseeModalElement && franchiseeCloseBtnElement && franchiseeCancelBtnElement && franchiseePaymentBtnElement) {
        function showFranchiseeModal() {
            franchiseeModalElement.style.display = "flex";
            console.log("Franchisee credit limit modal shown.");
        }

        function hideFranchiseeModal() {
            franchiseeModalElement.style.display = "none";
            console.log("Franchisee credit limit modal hidden.");
        }

        // Show the modal as soon as the DOM is ready
        showFranchiseeModal();

        // Event listeners for closing
        franchiseeCloseBtnElement.onclick = hideFranchiseeModal;
        franchiseeCancelBtnElement.onclick = hideFranchiseeModal;

        // Event listener for Payment button (does nothing)
        franchiseePaymentBtnElement.onclick = function (event) {
          event.preventDefault();
          console.log("Franchisee Payment button clicked - no action defined.");
        };

        // Close on overlay click
        franchiseeModalElement.addEventListener('click', function(event) {
            if (event.target === franchiseeModalElement) { // Check if the click is directly on the overlay
                hideFranchiseeModal();
            }
        });
    } else {
        console.error("One or more elements for the franchisee credit limit modal were not found. Modal will not function.");
    }

    console.log("Dashboard initialization complete. Modal should be visible.");

    // --- Any other JavaScript functionalities for your dashboard ---
});