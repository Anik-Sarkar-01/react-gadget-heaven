const Footer = () => {
    return (
        <footer className="footer  bg-base-200 text-base-content p-10 place-items-center items-center">
            <div >
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p>
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>
            
            <div className="flex gap-52">
                <nav className="flex flex-col">
                    <h6 className="footer-title font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;