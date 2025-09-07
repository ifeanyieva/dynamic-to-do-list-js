document.addEventListener("DOMContentLoaded", function () {
    // Grab elements from the DOM
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();


        // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // stop here so no empty task is added

        if (taskText !== "") {
            // Create a new list item
            const li = document.createElement("li");
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");

            // Assign onclick event to remove the li
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to the list item
    li.appendChild(removeBtn);

    // Add list item to the task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
     } }}
}

// Event listeners
    addButton.addEventListener("click", addTask));
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke on page load
    addTask();