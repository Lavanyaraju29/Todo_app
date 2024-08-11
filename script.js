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
}