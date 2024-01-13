import SkillTile from "./SkillTile";

function Skills() {
    const skills = [
        ["Java", "java.svg"], ["C", "c.svg"]
    ]

    return(
        <div>
            {skills.map(([skillName, iconName]) => (
                <SkillTile skillName={skillName} iconName={iconName} />
            ))}
        </div>
    );
}

export default Skills;