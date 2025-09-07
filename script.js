document.addEventListener("DOMContentLoaded", function () {
    // Grab elements from the DOM
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
});

    // Helper: save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        // Collect all <li> text content (without "Remove")
        taskList.querySelectorAll("li").forEach(li => {
            const text = li.firstChild.textContent; 
            tasks.push(text);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));}
    

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

            // Helper: render a task on screen
    function renderTask(taskText) {
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

    // Load tasks from localStorage at startup
    const loadTasks = localStorage.getItem("tasks");
    if (loadTasks) {
        JSON.parse(loadTasks).forEach(task => renderTask(task));
    }


    // Invoke on page load
    addTask();
