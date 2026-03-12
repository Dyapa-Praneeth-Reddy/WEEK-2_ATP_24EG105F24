// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
import { addTask } from './task.js'
//                   // Test your module system
//                   // 1. Add some tasks
addTask("eating", "high", "2024-12-12")
//                   // 2. Display all tasks
document.write("Tasks added successfully. Check console for details.");
export default addTask;
//                   // 3. Complete a task


//                   // 4. Display all tasks again`



// TODO: Import validator functions
import { validateTitle, validatePriority, validateDueDate } from './validator.js';
const tasks = [];
// 1. Add new task
function addTask(title, priority, dueDate) {
    //Validate using imported functions
    // If valid, add to tasks array
    if (!validateTitle() && !validatePriority() && !validateDueDate()) {
        return "Invalid task"
    }
    const newtask = { title, priority, dueDate, completed: false };
    tasks.push(newtask);
    return "Task added";
}


// 2. Get all tasks
function getAllTasks() {
    return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
    const task = tasks.find(ele => ele.id === taskId)
    if (!task) return "task not completed";
    task.completed = trues
    return "task completed";
}



// Export functions
export { addTask, getAllTasks, completeTask }