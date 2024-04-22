import JobPhoto from "../assets/bio_photo.png"

// Pass reverseDirection in props to reverse the orientation of the section
function ExperienceSection (props) {
    return (
        // w-5/6 flex flex-col-reverse lg:flex-row mx-auto mt-2 lg:mt-6
        <div>
            <div className="flex flex-col lg:flex-col-reverse">
                <div className={`flex ${props.reverseDirection ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-1/2 mx-auto lg:mx-0">
                        <img src={JobPhoto} alt="Job Capture" className="w-2/3 h-auto mx-auto rounded-full" />
                    </div>
                    <p className={`hidden lg:block w-1/2 ${props.reverseDirection ? 'pl-16' : 'pr-16'}`}>This is where the job info component goes</p>
                </div>
                <div className={`flex flex-col ${props.reverseDirection ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <h1 className={`lg:w-1/2 text-center lg:text-left ${props.reverseDirection ? 'lg:pl-16' : 'lg:pr-16'} text-5xl font-roboto-slab font-extrabold`}>Company Name</h1>
                    <p className="lg:w-1/2 text-center">Start Date - End Date</p>
                </div>
                <p className="lg:hidden mx-12">This is where the job info component goes</p>
            </div>
        </div>
    );
}

export default ExperienceSection;