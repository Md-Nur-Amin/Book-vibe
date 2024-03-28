import { FaBook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside className="grid grid-cols-1 ">
                    <h2><img src="../../../Image/books.png" alt="" /> </h2>
                    <p className="font-bold lg:text-[18px] lg:mb-3">Book Vibe Ltd.</p>
                    <p className="font-bold lg:text-[18px]">Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;