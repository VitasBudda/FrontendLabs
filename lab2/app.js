let taskList = [];

window.onload = () => {
    document.getElementById('todoForm').onsubmit = handleSubmit;
    document.getElementById('textInput').oninput = handleChange;
    document.getElementById('dateInput').oninput = handleChange;

    for (let task of taskList) {
        addTaskToTable(task);
    }
}

function isValid(text, dueDate) {
    return text.length > 3 && dueDate.length > 0;
}

function addTaskToTable(task) {
    const now = new Date();
    const dateDifference = task.dueDate.getTime() - now.getTime();
    const daysLeft = Math.round(dateDifference / (1000 * 3600 * 24));

    const table = document.getElementById("todoTable");
    const row = table.insertRow();

    row.insertCell(0).innerHTML = task.text;
    row.insertCell(1).innerHTML = `${task.dueDate.toLocaleDateString()} ${task.dueDate.toLocaleTimeString()}`;
    row.insertCell(2).innerHTML = `${daysLeft > 0 ? daysLeft : 0}`;

    const removeButton = document.createElement('input');
    removeButton.type = 'button';
    removeButton.className = 'removeBtn';
    removeButton.value = '×';
    removeButton.onclick = () => handleRemoveTask(task.id, row.rowIndex);
    row.insertCell(3).appendChild(removeButton);
}

function handleRemoveTask(id, rowIndex) {
    const table = document.getElementById("todoTable");
    table.deleteRow(rowIndex);
    taskList = taskList.filter(t => t.id !== id);
}

function handleChange() {
    const text = document.getElementById('textInput').value;
    const dueDate = document.getElementById('dateInput').value;

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !isValid(text, dueDate);
}

function handleSubmit(e) {
    e.preventDefault();

    const text = document.getElementById('textInput').value;
    const dueDate = document.getElementById('dateInput').value;

    let id = 1;

    if (taskList.length > 0) {
        id = taskList[taskList.length - 1].id + 1;
    }

    const task = {
        id: id,
        text: text,
        dueDate: new Date(dueDate)
    };

    taskList.push(task);
    addTaskToTable(task);

    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}