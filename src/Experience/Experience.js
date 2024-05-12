import LinePageHeader from "../Utils/LinePageHeader";
import ExperienceSection from "./ExperienceSection";

function Experience() {
    const numComponents = 4;
    return (
        <section id="experience" className="mt-48">
          <LinePageHeader headerText="Experience" reverseDirection />
          {[...Array(numComponents)].map((_, index) => (
            <ExperienceSection jobIdx={index} reverseDirection={(index % 2) ? true : false} />
          ))}
        </section>
      );
}
export default Experience;