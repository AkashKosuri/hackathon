let userSelections = {
    emotion: null,
    response: null
};

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