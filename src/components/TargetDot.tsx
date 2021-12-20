import { Dispatch, useEffect, useState } from "react";

type PlaceDot = {
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
            {   height: `30px`,
                width: `30px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.floor(Math.random() * (80 - 15 + 1) + 15)}vh`
            })
    }, [found])

    const handleLocal = () => {
        props.handleFind()
        setFound(!found)
    }
    
    return (
        <div
            className="target"
            style={dotStyle}
            onMouseOver={handleLocal}
        >
        </div>
    );
};
export default TargetDot;