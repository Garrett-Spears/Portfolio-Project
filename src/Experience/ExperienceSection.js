import JobPhoto from "../assets/bio_photo.png"

// Pass reverseDirection in props to reverse the orientation of the section
function ExperienceSection (props) {
    const companyNames = ["lockheed", "meta", "amazon", "ucf-ta"];

    return (
        <div className="flex flex-col lg:flex-col-reverse mt-16 mb-44">
            <div className={`flex ${props.reverseDirection ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-1/2 mx-auto lg:mx-0">
                    <img src={JobPhoto} alt="Job Capture" className="w-3/5 lg:w-5/12 h-auto mx-auto rounded-full lg:mt-8" />
                </div>
                <p className={`hidden lg:block w-1/2 ${props.reverseDirection ? 'pl-[10%]' : 'pr-16'}`}>This is where the job info component goes</p>
            </div>
            <div className={`flex flex-col ${props.reverseDirection ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <h1 className={`lg:w-1/2 text-center lg:text-left text-${companyNames[props.jobIdx]} ${props.reverseDirection ? 'lg:pl-[10%]' : 'lg:pr-16'} text-5xl font-roboto-slab font-extrabold`}>Company Name</h1>
                <p className="lg:w-1/2 text-center font-roboto-slab font-bold text-3xl text-white mt-2 mb-2">Start Date - End Date</p>
            </div>
            <p className="lg:hidden mx-12">This is where the job info component goes</p>
        </div>
    );
}

export default ExperienceSection;