import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { image, bookId, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const firsTag = tags[0];
    const lastTag = tags[1];

    return (

        <div>
            <Link to={`/book/${bookId}`}>
                <div className="md:container mx-2 lg:mx-[40px] mb-14">
                    <div className="p-6 border rounded-2xl">
                        <div className="bg-[#1313130D] rounded-2xl p-8 " >
                            <div className="card">
                                <figure className=" "><img src={image} alt="Shoes" /></figure>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline py-3 px-4 text-[#23BE0A] bg-[#23BE0A0D] font-medium text-[16px] "> {firsTag}</div>
                                <div className="badge badge-outline py-3 px-4 text-[#23BE0A] bg-[#23BE0A0D] font-medium text-[16px] "> {lastTag}</div>
                            </div>

                            <h2 className="card-title my-4"> {bookName} </h2>
                            <p className="text-[#131313CC] font-medium text-[16px] card-title">By: {author}</p>

                            <hr className="border-dotted bg-[#13131326] my-5" />

                            <div className="flex gap-x-32">
                                <p className="text-[#131313CC] font-medium card-title">{category}</p>
                                <p className="flex gap-1"> {rating} <CiStar className="mt-1" /></p>
                            </div>
                        </div>
                    </div>


                </div>
            </Link>

        </div>


    );
};

export default Book;