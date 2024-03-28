import { FaRegCommentDots } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div >
            <div className="bg-[#1313130D] lg:rounded-2xl border py-8  lg:mx-[40px] my-9">
                <h2 className="text-[#131313] font-bold text-3xl text-center">Contact Us</h2>
            </div>

            <div className=" mx-6 lg:mx-[500px] my-12">
                <label className="input input-bordered flex items-center my-2">
                    <h2><MdOutlineEmail className="mr-1" /></h2>
                    <input type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center">
                    <h2><FaUserCircle className="mr-1" /></h2>
                    <input type="text" className="grow" placeholder="Username" />
                </label>

                <label className="input input-bordered flex items-center my-2">
                    <h2><FaKey className="mr-1" /></h2>
                    <input type="password" placeholder="Password" className="grow" />

                </label>

                <label className="input input-bordered flex items-center ">
                    <h2><FaRegCommentDots className="mr-1" /></h2>
                    <input type="text" className="grow" placeholder="Your Comment" />


                </label>

            </div>

        </div>
    );
};

export default Contact;