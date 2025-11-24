/*
Q 3: Library Management System (Classes + Objects)

Design a Book class with properties like title, author, ISBN, isIssued.
● Create methods issueBook() and returnBook().
● Create an array of book objects.
● Display all available books (not issued).
● Allow a user to issue a book by searching ISBN.
*/

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAvailableBooks() {
        console.log("--- Available Books ---");
        const availableBooks = this.books.filter(book => !book.isIssued);
        if (availableBooks.length === 0) {
            console.log("No books are currently available.");
            return;
        }
        availableBooks.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        });
    }

    findBookByIsbn(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    issueBookByIsbn(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
            return book.issueBook();
        }
        else {
            console.log("Book with this ISBN not found.");
            return false;
        }
    }
}


// --- Demo ---
const myLibrary = new Library();

myLibrary.addBook(new Book("The Hobbit", "J.R.R. Tolkien", "978-0-345-33968-3"));
myLibrary.addBook(new Book("1984", "George Orwell", "978-0-452-28423-4"));
myLibrary.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0"));

myLibrary.displayAvailableBooks();

console.log("\n--- Issuing a Book ---");
myLibrary.issueBookByIsbn("978-0-452-28423-4"); // Issue '1984'
myLibrary.issueBookByIsbn("978-0-452-28423-4"); // Try to issue again

console.log("\n");
myLibrary.displayAvailableBooks();

console.log("\n--- Returning a Book ---");
const bookToReturn = myLibrary.findBookByIsbn("978-0-452-28423-4");
if (bookToReturn) {
    bookToReturn.returnBook();
}

console.log("\n");
myLibrary.displayAvailableBooks();
