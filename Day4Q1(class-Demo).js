// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
// Create a Book class with the following:

// Properties:
// title (string)
// author (string)
// pages (number)
// isAvailable (boolean, default: true)

// Methods:
// borrow() - Marks the book as not available
// returnBook() - Marks the book as available
// getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
// isLongBook() - Returns true if pages > 300, false otherwise

// 1. Create at least 5 book objects using the class:
// Example: "Harry Potter", "1984", "The Hobbit", etc.

// 2. Perform the following operations:
// i. Display info of all books
// ii. Borrow 2 books and show their availability status
// iii. Return 1 book and show updated status
// iv. Count how many books are "long books" (more than 300 pages)
// v. List all available books
class book{
    constructor(title, author, pages, isAvailable=true){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        if(this.isAvailable){
            this.isAvailable=false;
        }
    }
    returnBook(){
        if(!this.isAvailable){
            this.isAvailable=true;
        }
    }
    getInfo(){
        return `"${this.title} by ${this.author} (${this.pages} pages)"`
    }
    isLongBook(){
        return this.pages > 300;
    }
}
let b1=new book("Harry Potter", "J.K. Rowling", 233)
let b2=new book("1984", "George Orwell", 328)
let b3=new book("The Hobbit", "J.R.R. Tolkien", 310)
let b4=new book("To Kill a Mockingbird", "Harper Lee", 281)
let b
5=new book
("The Great Gatsby", "F. Scott Fitzgerald", 180)
// i. Display info of all books
const books = [b1, b2, b3, b4, b5];
books.forEach(book => console.log(book.getInfo()));
// ii. Borrow 2 books and show their availability status
b1.borrow();
b3.borrow();
console.log(`Availability of "${b1.title}": ${b1.isAvailable ? "Available" : "Not Available"}`);
console.log(`Availability of "${b3.title}": ${b3.isAvailable ? "Available" : "Not Available"}`);
// iii. Return 1 book and show updated status
b1.returnBook();
console.log(`Updated Availability of "${b1.title}": ${b1.isAvailable ? "Available" : "Not Available"}`);
// iv. Count how many books are "long books" (more than 300 pages)
const longBooksCount = books.filter(book => book.isLongBook()).length;
console.log("Number of Long Books:", longBooksCount);
// v. List all available books
const availableBooks = books.filter(book => book.isAvailable);
console.log("Available Books:");
availableBooks.forEach(book => console.log(book.getInfo()));
