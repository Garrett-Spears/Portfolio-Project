import React, { useEffect, useState } from 'react';

function SkillTile(props) {
    const [icon, setIcon] = useState(null);
    const [isMultiLine, setIsMultiLine] = useState(false);

    useEffect(() => {
        // Import icon dynamically based on icon image name passed into props
        const loadIcon = async () => {
            try {
                const importedIcon = await import(`../assets/skill_icons/${props.iconName}`);
                setIcon(importedIcon.default);
            } 
            catch (error) {
                console.error("Error loading skill icon: ", error);
            }
        };

        // Set boolean flag so that multi-line skill names will have a fixed width
        if (props.skillName.indexOf(' ') !== -1)
        {
            setIsMultiLine(true);
        }

        loadIcon();
    }, [props.iconName, props.skillName]);

    return(
        <div className="inline-flex h-16 w-56 items-center justify-center bg-white-with-pink-tint rounded-lg py-1">
            <img src={icon} alt={`${props.skillName} Icon`} />
            <p className={`text-off-black font-bold text-3xl pl-3 leading-7 ${isMultiLine ? "w-32" : ""}`}>{props.skillName}</p>
        </div>
    );
}

export default SkillTile;