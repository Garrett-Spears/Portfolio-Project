import LinePageHeader from "../Utils/LinePageHeader";
import AboutInfo from "./AboutInfo";

function About() {
    return (
        <section id="about">
          <LinePageHeader headerText="About Me" />
          <div className="flex mt-10">
            <AboutInfo />
          </div>
        </section>
      );
}

export default About;