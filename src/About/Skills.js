import SkillTile from "./SkillTile";

function Skills() {
    const skills = [
        ["Java", "java.svg"], ["C", "c.svg"], ["C++", "c++.svg"], ["Python", "python.svg"],
        ["C#", "csharp.svg"], ["Kotlin", "kotlin.svg"], ["JavaScript", "javascript.svg"], ["PHP", "php.svg"],
        ["HTML", "html.svg"], ["CSS", "css.svg"], ["SQL", "sql.svg"], ["Haskell", "haskell.svg"],
        ["Android", "android.svg"], ["Android Studio", "android_studio.svg"], ["React", "react.svg"], ["React Native", "react_native.svg"],
        ["Git", "git.svg"], ["GitHub", "github.svg"], ["Unity", "unity.svg"], ["Agile", "agile.svg"],
    ];

    return(
        <div className="grid justify-items-center mx-6 mt-20 gap-y-11 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map(([skillName, iconName]) => (
                <SkillTile key={skillName} skillName={skillName} iconName={iconName} />
            ))}
        </div>
    );
}

export default Skills;