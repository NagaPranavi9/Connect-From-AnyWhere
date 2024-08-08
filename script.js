// scripts.js

document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Get Started button clicked! Redirecting to the connect section.');
    document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('connectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const location = document.getElementById('location').value;
    const resultsDiv = document.getElementById('results');

    // Simulate finding study partners (you can replace this with real data later)
    resultsDiv.innerHTML = `<h3>Found Study Partners for "${subject}"${location ? ' near ' + location : ''}</h3>
                            <p>Partner 1: Alice (Location: London)</p>
                            <p>Partner 2: Bob (Location: New York)</p>`;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
});
