import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className=" text-[#131313CC] font-normal lg:text-[18px] "><NavLink to="/" >Home</NavLink></li>
        <li className=" text-[#131313CC] font-normal lg:text-[18px]"><NavLink to="/listedBooks" >Listed Books</NavLink></li>
        <li className=" text-[#131313CC] font-normal lg:text-[18px]"><NavLink to="/pageToLoad" >Pages to Read</NavLink></li>
        <li  className=" text-[#131313CC] font-normal lg:text-[18px]"><NavLink to="/library" >Library</NavLink></li>
        <li className=" text-[#131313CC] font-normal lg:text-[18px]"><NavLink to="/contact" >Contact</NavLink></li>
    </>


    return (
        <div className=" md:container mx-auto ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div> <img className=" h-[32px] w-[32px] lg:h-[64px] lg:w-[64px] " src="../../../Image/books.png" alt="" />
                    <a className="btn btn-ghost text-[16px] text-[#131313] font-bold lg:text-3xl ">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white bg-[#23BE0A] text-[8px] px-3 lg:px-7 lg:text-[18px] lg:mr-4  rounded-full lg:rounded-lg ">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2] px-3 lg:px-7 text-[8px] lg:text-[18px] rounded-full lg:rounded-lg">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;