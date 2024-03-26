import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="md:container ">
            
            <div className=" bg-[#1313130D] rounded-3xl mt-12  lg:mx-[135px] lg:p-32 ">
                <div className="flex gap-x-20">
                    <div>
                        <h1 className=" mb-12 lg:text-6xl lg:font-bold text-[#131313] ">Books to freshen up your bookshelf</h1>
                        <Link className="btn bg-[#23BE0A] border-0 " to="/listedBooks" >View The List</Link>
                    </div>
                    <img className=" h-[100px] w-[94px]  lg:h-[394px] lg:w-[318px]  " src="../../../Image/Playbook.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;