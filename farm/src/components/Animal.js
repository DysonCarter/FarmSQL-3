import React, { useState, useEffect } from "react";

const Animal = ({ id, name, animal, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({
        x: Math.random() * 525, 
        y: Math.random() * 724, 
    });

    if(id == null){
        id = '???';
    }
    if(name == null){
        name = '???';
    }
    if(animal == null){
        animal = '???';
    }
    if(color == null){
        color = 'rgba(0, 0, 0, 0.500)';
    }

    useEffect(() => {
        const moveInterval = setInterval(() => {
            const newX = Math.random() * 525; 
            const newY = Math.random() * 724; 
            setPosition({ x: newX, y: newY });

            // Add random pause between movements (0.5 to 2 seconds)
            const pauseDuration = Math.random() * 15000 + 500; // Random duration between 0.5 and 2 seconds
            setTimeout(() => {
                setPosition(prevPosition => prevPosition);
            }, pauseDuration);
        }, Math.random() * 10000); // Adjust the interval for the speed of movement

        return () => clearInterval(moveInterval);
    }, []);

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
        marginRight: "10px",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "left 5s, top 5s", 
    };

    if(color == 'rgba(0, 0, 0, 0.500)'){
        color = '???';
    }

    return (
        <div className="Animal" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={animalStyle}>
            {isHovered && (
                <div className="animalData">
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
