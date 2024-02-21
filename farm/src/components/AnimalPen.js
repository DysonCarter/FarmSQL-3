// src/components/AnimalPen.js

import React from "react";
import Animal from "./Animal";

const AnimalPen = ({ animals }) => {
    return (
        <div className="AnimalPen">
            {}
            {animals.map(animal => (
                <Animal
                    key={animal.id}
                    id={animal.id}
                    name={animal.name}
                    animal={animal.animal}
                    color={animal.color}
                    size={animal.size}
                />
            ))}
        </div>
    );
}

export default AnimalPen;
