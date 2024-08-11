<<<<<<< HEAD
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
=======
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.Value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('tasklist');

    const li = document.getElementById('li');
    li.notecontent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", function(){
        noteList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    noteList.appendChild(li);

    noteInput.value = "";
    } 
>>>>>>> 3c1747c982bf100e5e2e00f379dcaf32fa986f46
}