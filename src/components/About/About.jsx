import AboutUs from "../Images/AboutUs.jpeg";
import "./About.css"

const About = () => {
    return (
        <div>
             <div className="about-container">
            <img className='about-image' src={AboutUs} alt="about image for Volte Network" />
            <div className="about-layer"></div>
            <div className="about-text">
            <p className="text-5xl text-center p-2 lg:p-5 mt-12 font-bold">Hello, we are <span className="text-pink-700 "></span> <span className="text-violet-500 ">Network</span></p>
            </div>
        </div>
            
            <div className="p-10 lg:p-16 lg:mx-72 mx-10 text-xl text-justify shadow-xl mb-24 lg:m-24 my-12">
                <p className="pb-10">We’re a leading IT company that has the ability to handle a wide range of difficult software development projects in order to innovate and find solutions to pricey business challenges. We provide innovative and revolutionary information technology solutions that offer outcomes that are unmatched.
</p>

<p className="">
It gives Cutting Edge Tech Solutions great satisfaction to be able to provide you with information technology solutions that are aimed at taking your company to the next level. We provide tailor-made solutions to take your company to the next level by utilising mind-blowing tactics, creativity that is beyond the box, and a team of designers and developers that has won several awards.
</p>
            </div>
        </div>
    );
};

export default About;