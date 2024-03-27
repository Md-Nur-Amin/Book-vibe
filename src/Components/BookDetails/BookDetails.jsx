import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../Utility/LocalStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)
    console.log(book);
    const firsTag = book.tags[0];
    const lastTag = book.tags[1];


    const [readStatus, setReadStatus] = useState(false)
    const [wishlistStatus, setWishlistStatus] = useState(false);
    
    const handleApplyBook = () => {

        saveBook(idInt);

        if (wishlistStatus) {
            setReadStatus(true)
            toast.success('Added to read list');
        } else {
            setReadStatus(true);
            toast.success('Added to read list');
        }
    };
    const handleWhishlist = () => {
        if (readStatus) {
            toast.error('You have already read this book');
        } else {
            setWishlistStatus(true);
            toast.success('Book added to wishlist');
        }
    };


    return (
        <div>
            <h2>Book details of: {bookId} </h2>

            <div className="md:container my-12 mx-5 lg:mx-auto">
                <div className="gap-x-12">
                    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 ">
                        <div className="p-20 rounded-2xl bg-[#1313130D] ">
                            <figure><img className="lg:w-[225px] lg:h-[364px] " src={book.image} alt="Movie" /></figure>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title text-[#131313] font-bold lg:text-[40px] mb-5"> {book.bookName} </h2>
                            <h3 className="text-[#131313CC] font-medium text-xl " >By: {book.author} </h3>
                            <hr className="bg-[#13131326] my-4" />
                            <h3 className="text-[#131313CC] font-medium text-xl" >{book.category} </h3>
                            <hr className="bg-[#13131326] my-4" />
                            <h3 className="font-normal text-[#131313B3] " > <span className="font-bold text-[#131313] "> Review: </span> {book.review} </h3>

                            <div className="card-actions my-8 lg:mt-12"> <span className="font-bold text-[#131313] text-[16px] mr-4 ">Tag</span>
                                <div className="badge badge-outline text-[#23BE0A] bg-[#23BE0A0D] font-medium text-[16px] "> {firsTag}</div>
                                <div className="badge badge-outline text-[#23BE0A] bg-[#23BE0A0D] font-medium text-[16px] "> {lastTag}</div>
                            </div>
                            <hr className="bg-[#13131326] " />

                            <div className="gap-x-16" >
                                <h3 className="text-[#131313B3] font-semibold my-3">Number of Pages: <span className="text-[#131313] lg:ml-16"> {book.totalPages}</span> </h3>

                                <h3 className="text-[#131313B3] font-semibold my-3">Publisher: <span className="text-[#131313] lg:ml-32"> {book.publisher} </span> </h3>

                                <h3 className="text-[#131313B3] font-semibold">Year of Publishing:  <span className="text-[#131313] lg:ml-16"> {book.yearOfPublishing}</span></h3>

                                <h3 className="text-[#131313B3] font-semibold my-3">Rating: <span className="text-[#131313] lg:ml-36"> {book.rating}</span></h3>
                            </div>


                            <div className="card-actions justify-start">
                                <button onClick={handleApplyBook} className="btn ">Read</button>
                                <button onClick={handleWhishlist} className="btn bg-[#50B1C9] text-white">Wishlist </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;