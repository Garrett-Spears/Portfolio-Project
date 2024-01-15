import React, { useEffect, useState } from 'react';

function SkillTile(props) {
    const [icon, setIcon] = useState(null);

    // Import icon dynamically based on icon image name passed into props
    useEffect(() => {
        const loadIcon = async () => {
            try {
                const importedIcon = await import(`../assets/skill_icons/${props.iconName}`);
                setIcon(importedIcon.default);
            } 
            catch (error) {
                console.error("Error loading skill icon: ", error);
            }
        };

        loadIcon();
    }, [props.iconName]);

    return(
        <div className="inline-flex h-16 w-48 items-center justify-center bg-white-with-pink-tint rounded-lg px-4 py-1">
            <img src={icon} alt={`${props.skillName} Icon`} />
            <p className="text-off-black font-bold text-3xl pl-3 leading-7">{props.skillName}</p>
        </div>
    );
}

export default SkillTile;