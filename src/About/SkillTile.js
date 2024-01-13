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
                console.error('Error loading skill icon:', error);
            }
        };

        loadIcon();
    }, [props.iconName]);

    return(
        <div className="flex">
            <img src={icon} alt={`${props.skillName} Icon`} />
            <p>{props.skillName}</p>
        </div>
    );
}

export default SkillTile;