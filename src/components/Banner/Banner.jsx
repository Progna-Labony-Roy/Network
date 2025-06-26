import { Link } from 'react-router-dom';
import bannerIMG from '../Images/bannerIMG.jpeg';
import './Banner.css';

const Banner = () => {
    

    return (
        <div className="banner-container">
            <img className='banner-image' src={bannerIMG} alt="Banner image for Volte Network" />
            <div className="banner-layer"></div>
            <div className="banner-text">
                <span className='text-xl font-bold'>Welcome to </span>
                <span className='font-bold md:text-2xl bg-slate-700 md:p-2 p-1'>
                    <span className='text-violet-700'></span>
                    <span className='text-pink-700'> NETWORK</span>
                </span>
                <p className='md:text-5xl text-2xl font-bold md:p-6 p-4'>YOU CAN TRUST US</p>
               <Link to='/about'><button className="btn btn-outline text-white md:text-xl">About Us</button></Link>
            </div>
        </div>
    );
};

export default Banner;
