// Pass reverseDirection in props to reverse the order of the page header
function LinePageHeader(props) {
    return (
        <div className={`w-5/6 flex ${props.reverseDirection ? 'flex-row-reverse' : 'flex-row'} items-center mx-auto mt-10 gap-x-10`}>
            <h1 className="text-white text-5xl font-roboto-slab font-semibold">{props.headerText}</h1>
            <hr className="flex-grow border-2" />
        </div>
    );
}

export default LinePageHeader;