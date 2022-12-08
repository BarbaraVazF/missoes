class Book {
    constructor (title, description, author) 
    {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class BookInfo {
    constructor (book, id) {
        this.book = book;
        this.id = id
    }
}

class Library {
    books = [];
    addBook (bookInfo) {
        this.books.push (bookInfo)
    }
    getBooks () {
        return (this.books)
    }
    removeBookById (id) {
        for (var i = 0; i <= this.books.length; i++) {
            if (this.books[i].id == id) {
                this.books.splice(i, 1);
                break
            }
        }
    }
    getBookById (id) {
        for (var i = 0; i <= this.books.length; i++) {
            if (this.books[i].id == id) {
                return (this.books[i].book)
            }
        }
    }
    updateBookById (id, title, description, author) {
        for (var i = 0; i <= this.books.length; i++) {
            if (this.books[i].id == id) {
                if (title) {
                    this.books[i].book.title = title
                }
                if (description) {
                    this.books[i].book.description = description
                }
                if (author) {
                    this.books[i].book.author = author
                }
                break
            }
        }
    }
}

