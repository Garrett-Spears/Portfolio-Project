function NavButton(props) {
    return (
            <button class="bg-secondary-purple hover:bg-secondary-purple-hover text-white text-xl font-bold min-w-fit w-[9rem] px-2.5 py-1.5 rounded-xl">{props.name}</button>
    );
}

export default NavButton;