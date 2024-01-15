import SkillTile from "./SkillTile";

function Skills() {
    const skills = [
        ["Java", "java.svg"], ["C", "c.svg"], ["C++", "c++.svg"], ["Python", "python.svg"]
    ];

    return(
        <div className="grid justify-items-center mx-6 gap-y-11 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map(([skillName, iconName]) => (
                <SkillTile key={skillName} skillName={skillName} iconName={iconName} />
            ))}
        </div>
    );
}

export default Skills;