// JavaScript code to generate a random number when button is clicked
document.getElementById('generateBtn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
});

// JavaScript code to fetch a random quote from https://api.quotable.io and display it
document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();
});

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = '"' + data.content + '" - ' + data.author;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').innerText = 'Failed to fetch quote. Please try again later.';
        });
}

// JavaScript code to change background color randomly
document.getElementById('changeColorBtn').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random hex color
    document.body.style.backgroundColor = randomColor;
});
