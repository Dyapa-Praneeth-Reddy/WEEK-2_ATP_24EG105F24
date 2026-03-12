// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

//        ii. task.js - Task operations
// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  // Validate using imported functions
  if (!validateTitle() && !validatePriority() && !validateDueDate) { return "invalid task" }
  // If valid, add to tasks array
  // Return success/error message
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
  // Find task and mark as complete
}

// Export functions 