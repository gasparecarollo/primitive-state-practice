import React from 'react';
import { useState } from 'react';
import '../App.css';

const Box = () => {
    const [currentColor, setCurrentColor] = useState("blue");
    const [isBlue, setIsBlue] = useState(false);


    const colors = [
        "red",
        "blue"
    ]

    const index = colors.length % 2 === 0;

    const handleClick = () => {
        setIsBlue(!isBlue);
        setCurrentColor(colors[index])
    }
    return (

        <div className="box" onClick={handleClick} style={{ backgroundColor: !isBlue ? "blue" : "red" }}> </div>

    );
};

export default Box;