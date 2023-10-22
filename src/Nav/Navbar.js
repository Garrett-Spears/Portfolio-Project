import NavButton from "./NavButton";

function Navbar() {
    return (
        <div class="flex bg-primary-purple sticky top-0 mt-6 pt-8 pb-6 justify-center mx-auto space-x-7">
            <NavButton name="Home" />
            <NavButton name="About" />
            <NavButton name="Experience" />
            <NavButton name="Projects" />
            <NavButton name="Contact" />
        </div>
    );
}

export default Navbar;