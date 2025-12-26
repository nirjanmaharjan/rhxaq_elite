function createTask() {
    const title = document.getElementById("taskTitle").value;

    if (!title) {
        document.getElementById("output").innerText = "Task title is required.";
        return;
    }

    document.getElementById("output").innerText =
        "Task '" + title + "' created with status: pending";
}

