import LinePageHeader from "../Utils/LinePageHeader";
import ExperienceSection from "./ExperienceSection";

function Experience() {
    return (
        <section id="experience" className="mt-48">
          <LinePageHeader headerText="Experience" reverseDirection />
          <div className="flex flex-col">
            <ExperienceSection />
          </div>
        </section>
      );
}

export default Experience;