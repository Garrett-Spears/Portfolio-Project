import SkillTile from "./SkillTile";

function Skills() {
    const skills = [
        ["Java", "java.svg"], ["C", "c.svg"]
    ]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map(([skillName, iconName]) => (
                <SkillTile key={skillName} skillName={skillName} iconName={iconName} />
            ))}
        </div>
    );
}

export default Skills;