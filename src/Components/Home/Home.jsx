import { Link } from "react-router-dom";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="md:container ">

            <div className=" justify-center bg-[#1313130D] rounded-3xl mt-12 p-12 lg:mx-[135px] lg:p-32 mx-5 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div>
                        <h1 className=" text-2xl mb-6 lg:mb-12 lg:text-6xl font-bold text-[#131313] ">Books to freshen up your bookshelf</h1>
                        <Link className="mb-6 btn bg-[#23BE0A] border-0" to="/listedBooks" >View The List</Link>
                    </div>
                    <div className="lg:ml-20">
                        <img className=" h-[180px] w-[150px] lg:h-[394px] lg:w-[318px] " src="../../assets/Image/Playbook.png" alt="" />
                    </div>
                </div>
            </div>

            <Books></Books>
        </div>
    );
};

export default Home;