import React, { useState, useEffect } from "react";

const Animal = ({ id, name, animal, color, size }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({
        x: Math.random() * 440, 
        y: Math.random() * 630, 
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

    switch (size) {
        case 'small':
            size = '40px';
            break;
        case 'medium':
            size = '50px';
            break;
        case 'large':
            size = '60px';
            break;
        default:
            size = '51px';
    }
    
    
    useEffect(() => {
        const moveInterval = setInterval(() => {
            const newX = Math.random() * 455; 
            const newY = Math.random() * 645; 
            setPosition({ x: newX, y: newY });

            const pauseDuration = Math.random() * 15000 + 100;
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
        width: size,
        height: size,
        borderRadius: "50%",
        border: "5px solid black",
        backgroundColor: color,
        marginRight: "10px",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "left 10s, top 10s", 
    };

    if(color === 'rgba(0, 0, 0, 0.500)'){
        color = '???';
    }

    switch (size) {
        case '40px':
            size = 'small';
            break;
        case '50px':
            size = 'medium';
            break;
        case '60px':
            size = 'large';
            break;
        default:
            size = '???';
    }

    return (
        <div className="Animal" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={animalStyle}>
            {isHovered && (
                <div className="animalData">
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Species: {animal}</p>
                    <p>Color: {color}</p>
                    <p>Size: {size}</p>
                </div>
            )}
        </div>
    );
};

export default Animal;
