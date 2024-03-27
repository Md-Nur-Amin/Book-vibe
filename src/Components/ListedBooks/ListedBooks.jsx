import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {getStoredBook} from "../../Utility/LocalStorage";
 
const ListedBooks = () => {

    const books = useLoaderData();
    useEffect(()=>{
        const storeBookId = getStoredBook();
        if(books.lenght > 0){
            const booksApplied = [];
            for(const bookId of storeBookId){
                const book = books.find(book =>  book.bookId === bookId);
                if(book){
                    booksApplied.push(book)
                }
            }
        }
    }, [])


    return (
        <div>
            <h2>Hello World</h2>
        </div>
    );
};

export default ListedBooks;