// Task model
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// In-memory task storage
const tasks = [];

// Function to add a new task
function addTask(name, description) {
    const id = tasks.length + 1;
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    return newTask;
}

// Function to view all tasks
function viewTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        return task;
    } else {
        return null;
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    } else {
        return null;
    }
}

// Example usage
function main() {
    console.log("Adding tasks:");
    console.log(addTask("Task 1", "Description 1"));
    console.log(addTask("Task 2", "Description 2"));

    console.log("\nViewing all tasks:");
    console.log(viewTasks());

    console.log("\nUpdating task 1:");
    console.log(updateTask(1, "Updated Task 1", "Updated Description 1"));

    console.log("\nViewing all tasks after update:");
    console.log(viewTasks());

    console.log("\nDeleting task 2:");
    console.log(deleteTask(2));

    console.log("\nViewing all tasks after deletion:");
    console.log(viewTasks());
}

// Run the example usage
main();