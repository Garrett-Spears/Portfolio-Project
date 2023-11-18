import DownArrowButton from './DownArrowButton';

function Home() {
    return (
      <section id="home">
        <div className="flex flex-col h-screen">
          <div className="w-screen">
            <h1 className="mt-28 text-center text-off-white-header font-roboto-slab text-6xl font-light">Hello, I'm <span className="font-bold text-header-purple">Garrett Spears</span></h1>
            <p className="w-82 mt-3 mx-auto text-center text-white text-opacity-50 text-2xl font-bold">I'm a full stack software engineer and alumni from the University of Central Florida.</p>
          </div>
          <div className="flex-grow" />
          <div className="mx-auto mb-44 mt-8">
            <DownArrowButton />
          </div>
        </div>
      </section>
    );
}

export default Home;