import LocationIcon from '../assets/location_icon.svg';
import GraduateCapIcon from '../assets/graduate_cap_icon.svg';

function AboutInfo() {
    return(
        <div className="w-9/12 flex mx-auto mt-6">
            <div>
                <h1 className="text-5xl font-roboto-slab font-extrabold text-header-purple">Garrett Spears</h1>
                <span className="flex mt-6 ml-1.5">
                    <img src={LocationIcon} alt="Location Icon" className="my-auto" />
                    <p className="my-auto font-roboto-slab text-3xl text-white ml-4 font-bold">Orlando, FL</p>
                </span>
                <span className="flex mt-4">
                    <img src={GraduateCapIcon} alt="Graduate Cap Icon" className="my-auto" />
                    <p className="my-auto font-roboto-slab text-3xl text-white ml-3 font-bold">Bachelor of Science (B.S.), Computer Science</p>
                </span>
                <p className="text-2xl font-roboto-slab text-white text-opacity-50 font-semibold ml-12 pl-1 mt-1">University of Central Florida (Fall 2019 - Spring 2023)</p>
                <p className="text-2xl font-roboto-slab text-white text-opacity-50 font-semibold ml-12 pl-1">GPA: 4.0</p>
                <p className="text-2xl text-white font-medium mt-10 ml-2 mr-64">Welcome to my portfolio website! Ever since learning how to code, I have had a strong passion for the field of software engineering. I enjoy working with a variety of technologies ranging from web,  mobile, to low-level systems. However, my favorite part of my job is getting to work with many other talented individuals and getting to collaborate on exciting and innovative projects.</p>
            </div>
        </div>
    );
}

export default AboutInfo;