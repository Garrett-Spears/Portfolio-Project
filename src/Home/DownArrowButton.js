function DownArrowButton() {
    return(
            // Used inline svg so that path can be directly accessed instead of rectangular svg
            <svg width="85" height="62" viewBox="0 0 85 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <a href="#about">
                    <path className="stroke-purple hover:stroke-purple-hover" d="M8 8L42.5864 54L77.1728 8" strokeWidth="14.5216" strokeLinecap="round" strokeLinejoin="round" />
                </a>
            </svg>
    );
}

export default DownArrowButton