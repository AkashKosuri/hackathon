let userSelections = {
    conflict: null,
    emotion: null,
    response: null
};

function selectConflict(conflict) {
    userSelections.conflict = conflict;
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
}

function selectEmotion(emotion) {
    userSelections.emotion = emotion;
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
}

function selectResponse(response) {
    userSelections.response = response;
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('submit').classList.remove('hidden');
}

function submitSelections() {
    console.log("User Selections:", userSelections);
    alert("Selections submitted! Check the console for details.");
    // Here you can send the selections to the backend or AI model
}