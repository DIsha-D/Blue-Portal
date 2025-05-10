// script.js (or dashboard.js) - Main dashboard script

// This event listener ensures that the code inside runs only after the
// entire HTML document has been completely loaded and parsed.
window.addEventListener('DOMContentLoaded', () => { // Removed 'async' as it's not strictly needed for this combined script
    console.log("Dashboard DOMContentLoaded. Initializing page components...");

    // --- Franchisee Credit Limit Modal Logic ---
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

        // Event listeners for closing the Franchisee Modal
        franchiseeCloseBtnElement.onclick = hideFranchiseeModal;
        franchiseeCancelBtnElement.onclick = hideFranchiseeModal;

        // Event listener for Payment button in Franchisee Modal (does nothing)
        franchiseePaymentBtnElement.onclick = function (event) {
          event.preventDefault();
          console.log("Franchisee Payment button clicked - no action defined.");
        };

        // Close Franchisee Modal on overlay click
        franchiseeModalElement.addEventListener('click', function(event) {
            if (event.target === franchiseeModalElement) {
                hideFranchiseeModal();
            }
        });
        console.log("Franchisee Modal initialized.");
    } else {
        console.error("One or more elements for the franchisee credit limit modal were not found. Modal will not function.");
    }

    // --- Accordion Functionality for Fee Rate Card ---
    function initializeAccordions() {
        const accordionItems = document.querySelectorAll(".accordion-item"); // Make sure your HTML has these classes

        if (accordionItems.length > 0) {
            accordionItems.forEach(item => {
                const header = item.querySelector(".accordion-header");
                const content = item.querySelector(".accordion-content");

                if (header && content) {
                    header.addEventListener("click", () => {
                        // Optional: Close other open accordion items for one-at-a-time behavior
                       // accordionItems.forEach(otherItem => {
                        //     if (otherItem !== item && otherItem.classList.contains('active')) {
                        //         otherItem.classList.remove('active');
                        //         otherItem.querySelector('.accordion-content').style.display = 'none';
                       //          // If using max-height for animation, reset it:
                       //          // otherItem.querySelector('.accordion-content').style.maxHeight = null;
                       //      }
                      //   });

                        // Toggle current item
                        const isActive = item.classList.toggle("active"); // 'active' class can be used for styling the arrow
                        if (isActive) {
                            content.style.display = "block";
                            // For smooth animation with max-height (requires CSS transition on max-height)
                            // content.style.maxHeight = content.scrollHeight + "px";
                            console.log("Accordion item opened:", header.textContent.trim());
                        } else {
                            content.style.display = "none";
                            // For smooth animation with max-height
                            // content.style.maxHeight = null;
                            console.log("Accordion item closed:", header.textContent.trim());
                        }
                    });
                } else {
                    console.warn("Accordion item found without a header or content child:", item);
                }
            });
            console.log("Accordions initialized for", accordionItems.length, "items.");
        } else {
            console.log("No accordion items found on the page to initialize.");
        }
    }

    // Initialize the accordions
    initializeAccordions();

    console.log("All dashboard initializations complete.");

    // --- Any other JavaScript functionalities for your dashboard can go here ---
});