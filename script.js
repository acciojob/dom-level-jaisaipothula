// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the element with id 'level'
    const targetElement = document.getElementById('level');

    if (targetElement) {
        // Initialize a counter to track the DOM level
        let domLevel = 0;
        let currentElement = targetElement;

        // Traverse upwards through parent elements until html root
        while (currentElement !== document.documentElement) {
            currentElement = currentElement.parentElement;
            domLevel++;
        }

        // Display the result using alert
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert("Element with id 'level' not found.");
    }
});
