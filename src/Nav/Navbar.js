import NavButton from './NavButton';
import { useEffect } from 'react';

function Navbar() {
    // Adding scroll margin to top of all sections so that navbar doesn't cover each section
    // when scrolled to.
    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const pageSections = document.getElementsByTagName("section");
    
        if (navbar && pageSections) {
          const navbarHeight = navbar.clientHeight;
    
          for (var i = 0; i < pageSections.length; i++)
          {
            pageSections[i].style.scrollMarginTop = navbarHeight + 'px';
          };
        }
    }, []);

    return (
        <div id="navbar" className="flex bg-primary-purple sticky top-0 mt-6 pt-8 pb-6 justify-center mx-auto space-x-7">
            <a href="#home">
                <NavButton name="Home" />
            </a>
            <a href="#about">
                <NavButton name="About" />
            </a>
            <a href="#experience">
                <NavButton name="Experience" />
            </a>
            <a href="#projects">
                <NavButton name="Projects" />
            </a>
            <a href="#contact">
                <NavButton name="Contact" />
            </a>
        </div>
    );
}

export default Navbar;