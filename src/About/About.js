import LinePageHeader from "../Utils/LinePageHeader";
import AboutInfo from "./AboutInfo";
import Skills from "./Skills";

function About() {
    return (
        <section id="about">
          <LinePageHeader headerText="About Me" />
          <div className="flex flex-col mt-10">
            <AboutInfo />
            <Skills />
          </div>
        </section>
      );
}

export default About;