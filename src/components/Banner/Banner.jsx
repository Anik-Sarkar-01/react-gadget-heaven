import banner from '../../assets/banner.jpg';

const Banner = () => {
    const bannerStyle = { backgroundImage: `url(${banner})` }
    console.log(banner);
    return (
        <div className="hero bg-base-200 min-h-screen text-white">
            <div className="hero-content text-center flex-col max-w-full gap-0 p-0">
                <div className="bg-purple-500 pt-12 pb-60">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 max-w-3xl mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-purple-500 rounded-3xl font-bold">Shop Now</button>
                </div>
                <div className='relative bottom-52'>
                    <div style={bannerStyle} className='h-[564px] w-4xl bg-cover bg-no-repeat rounded-2xl'></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;