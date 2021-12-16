import { Dispatch, useEffect, useState } from "react";
import wally from './waldo.jpg'

type PlaceDot = {
    background: string,
    height: string
    width: string
    left: string
    top: string
};

interface Target {
    target: string;
    handleFind: Function
    found: boolean
}

const TargetDot = (props: Target) => {
    const [color, setColor] = useState("linear-gradient(45deg, maroon 100%)");
    const [dotStyle, setDotStyle] = useState<PlaceDot>();
    const [found, setFound] = useState(false)

    useEffect(() => {
        setDotStyle(
            {   background: "maroon",
                height: `13px`,
                width: `13px`,
                left: `${Math.random() * 100}vh`,
                top: `${Math.random() * 100}vh`
            })
    }, [found])

    const handleLocal = () => {
        props.handleFind()
        setFound(!found)
    }
    
    return (
        <div
            className="dot"
            style={dotStyle}
            onMouseOver={handleLocal}
        >
        </div>
    );
};
export default TargetDot;