import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../Utility/LocalStorage";
import { MdOutlineRequestPage } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { getStoredWishlist } from "../../Utility/WishlistStorage";

const ListedBooks = () => {


    const wish_list = useLoaderData();
    const [appliedWish, setAppliedWish] = useState([])



    useEffect(() => {
        const storeWishID = getStoredWishlist();
        if (wish_list.length > 0) {
            // const wishApplied = wish_list.filter( wish => wish.storeWishID.includes(wish_list.bookId) )

            const wishApplied = [];
            for (const bookId of storeWishID) {
                const wish = wish_list.find(wish => wish.bookId === bookId);
                if (wish) {
                    wishApplied.push(wish)
                }
            }

            setAppliedWish(wishApplied)
            console.log(wish_list, storeWishID, wishApplied);
        }
    }, [wish_list])






    const books = useLoaderData();
    const [appliedBooks, setAppliedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleBookFilter = filter => {
        let sortedBooks = [];
        switch (filter) {
            case 'rating':
                sortedBooks = [...appliedBooks].sort((a, b) => b.rating - a.rating);
                break;
            case 'pages':
                sortedBooks = [...appliedBooks].sort((a, b) => b.totalPages - a.totalPages);
                break;
            case 'year':
                sortedBooks = [...appliedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                sortedBooks = appliedBooks;
                break;
        }
        setDisplayBooks(sortedBooks);
    };

    useEffect(() => {
        const storeBookId = getStoredBook();
        if (books.length > 0) {
            const booksApplied = [];
            for (const bookId of storeBookId) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    booksApplied.push(book);
                }
            }
            setAppliedBooks(booksApplied);
            setDisplayBooks(booksApplied);
        }
    }, [books]);




    const handleWishlistBooksClick = () => {
        setDisplayBooks(appliedBooks);
    };

    const handleReadBooksClick = () => {
        setDisplayBooks(appliedWish);
    };


    return (
        <div>
            <div className="bg-[#1313130D] rounded-2xl border py-9 lg:mx-[40px] my-9">
                <h2 className="text-[#131313] font-bold text-3xl text-center">Books</h2>
            </div>
            <div className="flex justify-center py-10">
                <details className="dropdown">
                    <summary className="m-1 text-white btn bg-[#23BE0A]">Sort By <FaChevronDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleBookFilter('rating')}>Rating</button></li>
                        <li><button onClick={() => handleBookFilter('pages')}>Number of Pages</button></li>
                        <li><button onClick={() => handleBookFilter('year')}>Publish Year</button></li>
                    </ul>
                </details>
            </div>

            {/* <h2>Books I've read: {appliedBooks.length}</h2>
            <h2>Books added to wishllist: {appliedWish.length}</h2> */}

            <div className="flex mx-4 lg:mx-[50px] ">
                <button onClick={handleReadBooksClick} role="tablist" className="btn">Read Books</button>
                <button onClick={handleWishlistBooksClick} className="btn">Wishlist Books</button>
            </div>

            <ul>
                {displayBooks.map(book => (
                    <li key={book.bookId}>
                        <div className="mb-6 m-3 lg:mx-[50px]">
                            <div className="card shadow-xl p-8 grid grid-cols-1 lg:grid-cols-2 rounded-2xl border">
                                <div className="bg-[#1313130D] p-7 rounded-2xl lg:mr-20">
                                    <figure><img src={book.image} alt="Book" /></figure>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold lg:text-2xl text-[#131313]">{book.bookName}</h2>
                                    <h2 className="text-[#131313CC] text-[16px] font-medium my-4">{book.author}</h2>
                                    <div className="gap-x-16 my-3 grid grid-rows-1 lg:grid-cols-2">
                                        <div className="flex gap-x-3 my-4 lg:my-0">
                                            <span className="font-bold text-[#131313] lg:text-[16px] ">Tags</span>

                                            {book.tags.map((tag, index) => (
                                                <div key={index} className="btn btn-xs border-none rounded-full text-[#23BE0A] bg-[#23BE0A0D] font-medium text-xs lg:text-[16px]">#{tag}</div>
                                            ))}

                                        </div>
                                        <h2 className="text-[#131313CC] font-medium text-[16px] flex gap-x-2">
                                            <MdOutlineLocationOn className="mt-1" /> Year of Publishing: {book.yearOfPublishing}
                                        </h2>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <h2 className="text-[#13131399] gap-x-2 font-medium text-[16px] flex">
                                            <HiOutlineUsers className="mt-1" /> Publisher: {book.publisher}
                                        </h2>
                                        <h2 className="text-[#13131399] gap-x-2 font-medium text-[16px] flex">
                                            <MdOutlineRequestPage className="mt-1" /> Page: {book.totalPages}
                                        </h2>
                                    </div>
                                    <hr className="bg-[#13131326] my-4" />
                                    <div className="card-actions">
                                        <button className="btn bg-[#328EFF26] rounded-full text-[#328EFF]">Category: {book.category}</button>
                                        <button className="btn bg-[#FFAC3326] rounded-full text-[#FFAC33]">Rating: {book.rating}</button>
                                        <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListedBooks;
