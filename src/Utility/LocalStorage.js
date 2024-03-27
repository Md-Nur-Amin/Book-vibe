
const getStoredBook = () => {
    const storedBook = localStorage.getItem('book_app');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBook = bookId => {
    const storeManyBook = getStoredBook();
    const exists = storeManyBook.find(bookID => bookID === bookId);
    if (!exists) {
        storeManyBook.push(bookId);
        localStorage.setItem('book_app', JSON.stringify(storeManyBook));
    }
}

export { getStoredBook, saveBook };
