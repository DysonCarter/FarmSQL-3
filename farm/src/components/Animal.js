import React, { useState } from "react";

const Animal = ({ id, name, animal, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const animalStyle = {
        width: "50px", 
        height: "50px", 
        borderRadius: "50%", 
        backgroundColor: color,
        display: "inline-block",
        marginRight: "10px",
    };

    return (
        <div className="Animal" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={animalStyle}></div>
            {isHovered && (
                <div>
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Species: {animal}</p>
                    <p>Color: {color}</p>
                </div>
            )}
        </div>
    );
};

export default Animal;
