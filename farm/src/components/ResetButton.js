// ResetButton.js
import React from 'react';
import axios from 'axios';

const ResetButton = () => {
    
    const deleteQuery = "DELETE FROM farm;";
    const refillQuery = "INSERT INTO farm (id, name, animal, color, size) VALUES (1, 'Fred', 'Cow', 'Black', 'small'), (2, 'Jeff', 'Cow', 'White', 'large'), (3, 'Oinker', 'Pig', 'Pink', 'large'), (4, 'Moo', 'Cow', 'Brown', 'large'), (5, 'Porky', 'Pig', 'Gray', 'medium'), (6, 'Bessie', 'Cow', 'White', 'large'), (7, 'Piggy', 'Pig', 'Pink', 'small'), (8, 'Spot', 'Cow', 'Black', 'large'), (9, 'Wilbur', 'Pig', 'Brown', 'large'), (10, 'Clara', 'Cow', 'Brown', 'large'), (11, 'Alice', 'Cow', 'Brown', 'large'), (12, 'Bob', 'Pig', 'Pink', 'medium'), (13, 'Charlie', 'Chicken', 'White', 'small'), (14, 'David', 'Cow', 'Black', 'small'), (15, 'Emily', 'Pig', 'Pink', 'medium'), (16, 'Frank', 'Chicken', 'White', 'small'), (17, 'Grace', 'Cow', 'White', 'large'), (18, 'Henry', 'Pig', 'Pink', 'medium'), (19, 'Isabella', 'Chicken', 'Brown', 'small'), (20, 'Jack', 'Cow', 'Brown', 'small'), (21, 'Katherine', 'Pig', 'Pink', 'medium'), (22, 'Liam', 'Chicken', 'White', 'small'), (23, 'Mia', 'Cow', 'Black', 'large'), (24, 'Noah', 'Pig', 'Pink', 'medium'), (25, 'Olivia', 'Chicken', 'White', 'small'), (26, 'Sophia', 'Cow', 'Brown', 'small'), (27, 'William', 'Pig', 'Pink', 'medium'), (28, 'Ethan', 'Chicken', 'White', 'small'), (29, 'Ava', 'Cow', 'White', 'large'), (30, 'James', 'Pig', 'Pink', 'medium'), (31, 'Emma', 'Chicken', 'Brown', 'small'), (32, 'Alexander', 'Cow', 'Black', 'small'), (33, 'Charlotte', 'Pig', 'Pink', 'medium'), (34, 'Michael', 'Chicken', 'White', 'small'), (35, 'Madison', 'Cow', 'Brown', 'large'), (36, 'Benjamin', 'Pig', 'Pink', 'medium'), (37, 'Abigail', 'Chicken', 'Brown', 'small'), (38, 'Daniel', 'Cow', 'Black', 'small'), (39, 'Ella', 'Sheep', 'White', 'medium'), (40, 'Finn', 'Cow', 'Black', 'small'), (41, 'Gabriella', 'Sheep', 'White', 'large'), (42, 'Harry', 'Pig', 'Pink', 'medium'), (43, 'Ivy', 'Sheep', 'White', 'small'), (44, 'Jacob', 'Cow', 'Brown', 'small'), (45, 'Lily', 'Sheep', 'White', 'large'), (46, 'Kevin', 'Pig', 'Pink', 'medium'), (47, 'Maya', 'Sheep', 'White', 'medium'), (48, 'Luke', 'Cow', 'Black', 'large'), (49, 'Nora', 'Sheep', 'Black', 'small'), (50, 'Oscar', 'Pig', 'Pink', 'large'), (51, 'Penelope', 'Sheep', 'White', 'large'), (52, 'Quinn', 'Cow', 'Brown', 'small'), (53, 'Ruby', 'Sheep', 'White', 'medium'), (54, 'Samuel', 'Pig', 'Pink', 'large'), (55, 'Samantha', 'Sheep', 'White', 'large'), (56, 'Tristan', 'Cow', 'Black', 'small'), (57, 'Victoria', 'Sheep', 'White', 'medium'), (58, 'Wyatt', 'Pig', 'Pink', 'large'), (59, 'Zoe', 'Sheep', 'White', 'small'), (60, 'Max', 'Cow', 'Brown', 'large'), (61, 'Hazel', 'Sheep', 'White', 'medium'), (62, 'Leo', 'Pig', 'Pink', 'medium'), (63, 'Harper', 'Sheep', 'White', 'small'), (64, 'Mason', 'Cow', 'Black', 'large'), (65, 'Avery', 'Sheep', 'White', 'large'), (66, 'Elijah', 'Pig', 'Pink', 'medium'), (67, 'Scarlett', 'Sheep', 'White', 'medium'), (68, 'Logan', 'Cow', 'Brown', 'small'), (69, 'Aria', 'Sheep', 'White', 'small'), (70, 'Oliver', 'Pig', 'Pink', 'large'), (71, 'Aurora', 'Sheep', 'White', 'large'), (72, 'Jackson', 'Cow', 'Black', 'small'), (73, 'Chloe', 'Sheep', 'White', 'medium'), (74, 'Eli', 'Pig', 'Pink', 'medium'), (75, 'Elizabeth', 'Sheep', 'White', 'medium');";

    const resetFarm = async () => {
        try {
            await axios.post('http://localhost:3001/executeSqlQuery', { sqlQuery: deleteQuery });
            await axios.post('http://localhost:3001/executeSqlQuery', { sqlQuery: refillQuery });
            alert('Farm reset successful');
        } catch (error) {
            console.error('Error resetting farm:', error);
            alert('Error resetting farm. Please check the console for details.');
        }
    };

    return (
        <div>
            <button onClick={resetFarm} className='ResetButton'>⟳</button>
        </div>
    )
}

export default ResetButton;
