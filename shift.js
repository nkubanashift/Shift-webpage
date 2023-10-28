document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const container = document.querySelector('.container');
    const sideMenu = document.querySelector('.side-menu');
    const backLink = sideMenu.querySelector('a[href="#"]'); // Change the href value to match the actual URL of the home page

    hamburgerIcon.addEventListener('click', function() {
        container.classList.toggle('active');
    });

    // Add an event listener to the back icon in the side menu
    backLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (e.g., navigating to "#")
        container.classList.remove('active'); // Close the side menu
        // You can add additional logic here to navigate to the actual home page if needed
    });
});