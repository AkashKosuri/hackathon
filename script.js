let userSelections = {
    emotion: null,
    response: null
};
// Particle Animation Script
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray.length = 0;
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = '#e94560'; // Soft red for particles
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => particle.update());
}

init();
animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Step 1: Select Emotion
function selectEmotion(emotion) {
    userSelections.emotion = emotion;
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
}

// Step 2: Select Response
function selectResponse(response) {
    userSelections.response = response;
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('submit').classList.remove('hidden');
}

// Submit Selections
function submitSelections() {
    console.log("User Selections:", userSelections);
    alert("Redirecting to the chatbot...");
    // Redirect to the chatbot page or start the chatbot conversation
}
// Function to handle submission and show the chat interface
function submitSelections() {
    // Hide the selection section
    document.querySelector('.selection').classList.add('hidden');

    // Show the chat interface
    const chatInterface = document.getElementById('chat-interface');
    chatInterface.classList.remove('hidden');

    // Add event listeners for the chat interface
    document.getElementById('chat-send-btn').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send a message
    function sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (message !== "") {
            const chatBox = document.getElementById('chat-box');
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user');
            userMessage.textContent = message;
            chatBox.appendChild(userMessage);

            // Clear input
            input.value = '';

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulate a bot response (optional)
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.classList.add('message', 'bot');
                botMessage.textContent = "This is a bot response.";
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);
        }
    }
}