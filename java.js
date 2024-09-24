function showTab(event, tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the clicked tab and add active class to the link
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Show the About tab by default on page load
document.addEventListener("DOMContentLoaded", function() {
    showTab(event, 'about');
});

// Function to handle form submission
function sendMessage(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Handle form submission logic here (e.g., send to email, log to console)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Optionally reset the form
    document.getElementById('contact-form').reset();
    alert("Thank you for your message!");
}
