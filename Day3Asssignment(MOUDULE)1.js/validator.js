// Task Management System (ToDo App Modules):
//  Building a task manager like Todoist

// i. validator.js - Input validation
  // TODO: Export these validation functions
                      


// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
if(!title){
return "Title required"
}
if(title.length<=3){
return "min 3 characters required"
}  
return true
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) { 
 const priorities=["Low","Medium","High"]
let result=priorities.includes(priority)
if(result===false){
return "Invalid priority"
}
return true
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(Date) {
let dueDate=new Date('2024-10-20')
let today=new Date()
if(dueDate>today){
return "invalid due date"
}
return true
}

export {validateTitle,validatePriority,validateDueDate}