// Array of different "NO" responses
const noResponses = [
    "NO!",
    "NOPE!",
    "NO WAY!",
    "NEVER!",
    "ABSOLUTELY NOT!",
    "NAH!",
    "NOT A CHANCE!",
    "FORGET IT!",
    "NO NO NO!",
    "NOOOO!",
    "UH-UH!",
    "NOT HAPPENING!",
    "DENIED!",
    "NEGATIVE!",
    "NO THANKS!",
];

// Array of different "YES" responses for Elephant
const yesResponses = [
    "YES!",
    "YEP!",
    "YEAH!",
    "ABSOLUTELY!",
    "SURE!",
    "OF COURSE!",
    "DEFINITELY!",
    "YOU BET!",
    "YES YES YES!",
    "YEEESSS!",
    "AFFIRMATIVE!",
    "CERTAINLY!",
    "INDEED!",
    "POSITIVELY!",
    "WITHOUT A DOUBT!",
];

let catClickCount = 0;
let parrotClickCount = 0;

// Get elements
const grumpyCat = document.getElementById('grumpy-cat');
const elephant = document.getElementById('elephant');
const parrot = document.getElementById('parrot');
const palmTree = document.getElementById('palm-tree');
const responseDiv = document.getElementById('response');
const clickCounter = document.getElementById('click-counter');

// Function to get random response
function getRandomResponse() {
    return noResponses[Math.floor(Math.random() * noResponses.length)];
}

// Function to get random yes response
function getRandomYesResponse() {
    return yesResponses[Math.floor(Math.random() * yesResponses.length)];
}

// Function to get random color (for NO responses)
function getRandomColor() {
    const colors = ['#ff6b6b', '#ff0000', '#ff3333', '#cc0000', '#ff5555', '#ee0000'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to get random green color (for YES responses)
function getRandomGreenColor() {
    const colors = ['#4caf50', '#2e7d32', '#66bb6a', '#388e3c', '#43a047', '#1b5e20'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Click event handler for Grumpy Cat
grumpyCat.addEventListener('click', function() {
    // Increment cat click count
    catClickCount++;
    
    // Add shake animation
    grumpyCat.classList.add('shake');
    setTimeout(() => {
        grumpyCat.classList.remove('shake');
    }, 500);
    
    // Special message after many clicks
    if (catClickCount === 10) {
        responseDiv.textContent = "STILL NO!";
        responseDiv.style.color = getRandomColor();
    } else if (catClickCount === 20) {
        responseDiv.textContent = "SERIOUSLY, NO!";
        responseDiv.style.color = getRandomColor();
    } else if (catClickCount === 50) {
        responseDiv.textContent = "NO MEANS NO!";
        responseDiv.style.color = getRandomColor();
    } else if (catClickCount === 100) {
        responseDiv.textContent = "ARE YOU KIDDING ME?!";
        responseDiv.style.color = getRandomColor();
    } else {
        // Display random "NO" response
        const response = getRandomResponse();
        responseDiv.textContent = response;
        responseDiv.style.color = getRandomColor();
    }
    
    // Add pop-in animation
    responseDiv.classList.remove('show');
    void responseDiv.offsetWidth; // Trigger reflow
    responseDiv.classList.add('show');
});

// Click event handler for Elephant
elephant.addEventListener('click', function() {
    // Add shake animation
    elephant.classList.add('shake');
    setTimeout(() => {
        elephant.classList.remove('shake');
    }, 500);
    
    // Display random "YES" response
    const response = getRandomYesResponse();
    responseDiv.textContent = response;
    responseDiv.style.color = getRandomGreenColor();
    
    // Add pop-in animation
    responseDiv.classList.remove('show');
    void responseDiv.offsetWidth; // Trigger reflow
    responseDiv.classList.add('show');
});

// Click event handler for Parrot (counts clicks)
parrot.addEventListener('click', function() {
    // Increment parrot click counter
    parrotClickCount++;
    clickCounter.textContent = `Parrot Clicks: ${parrotClickCount}`;
    
    // Add shake animation
    parrot.classList.add('shake');
    setTimeout(() => {
        parrot.classList.remove('shake');
    }, 500);
    
    // Display click count
    responseDiv.textContent = `Click #${parrotClickCount}!`;
    responseDiv.style.color = '#ff6b6b';
    
    // Add pop-in animation
    responseDiv.classList.remove('show');
    void responseDiv.offsetWidth; // Trigger reflow
    responseDiv.classList.add('show');
});

// Add hover effect to pupils (follow cursor slightly)
grumpyCat.addEventListener('mousemove', function(e) {
    const pupils = document.querySelectorAll('.pupil');
    const rect = grumpyCat.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    pupils.forEach(pupil => {
        const moveX = x / 30;
        const moveY = y / 30;
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Reset pupil position when mouse leaves
grumpyCat.addEventListener('mouseleave', function() {
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
        pupil.style.transform = 'translate(0, 0)';
    });
});

// Initial message
responseDiv.textContent = "👇 Click me!";
responseDiv.style.color = '#ffffff';

// Palm Tree Click Handler
palmTree.addEventListener('click', function() {
    // Add sway animation
    palmTree.classList.add('sway');
    setTimeout(() => {
        palmTree.classList.remove('sway');
    }, 500);
    
    // Generate random number 0-9
    const randomNumber = Math.floor(Math.random() * 10);
    
    // Display the number
    responseDiv.textContent = randomNumber;
    responseDiv.style.color = '#4a7c2c'; // Green color matching the palm leaves
    
    // Add pop-in animation
    responseDiv.classList.remove('show');
    void responseDiv.offsetWidth; // Trigger reflow
    responseDiv.classList.add('show');
});








