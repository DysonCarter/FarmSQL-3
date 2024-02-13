// src/components/AnimalPen.js

import React from "react";
import Animal from "./Animal";

const AnimalPen = ({ animals }) => {
    return (
        <div className="AnimalPen">
            {/* Map through the list of animals and render an Animal component for each */}
            {animals.map(animal => (
                <Animal
                    key={animal.id}
                    id={animal.id}
                    name={animal.name}
                    animal={animal.animal}
                    color={animal.color}
                />
            ))}
        </div>
    );
}

export default AnimalPen;
