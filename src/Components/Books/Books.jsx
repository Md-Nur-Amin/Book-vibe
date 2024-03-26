import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data => setBooks(data) )
    },[])

    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold my-16">Books</h2>
            <h2> Books: {books.length} </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;