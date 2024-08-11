document.getElementById('saveButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    
    if (noteText) {
        const notesList = document.getElementById('notesList');
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${noteText}
            <button onclick="deleteNote(this)">Delete</button>
        `;
        
        notesList.appendChild(listItem);
        noteInput.value = '';
    } else {
        alert('Note cannot be empty');
    }
});

function deleteNote(button) {
    const notesList = document.getElementById('notesList');
    notesList.removeChild(button.parentElement);
}