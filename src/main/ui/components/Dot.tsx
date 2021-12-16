import randomColor from "randomcolor";
import { Dispatch, useEffect, useState } from "react";

type PlaceDot = {
    backgroundColor: string,
    height: string
    width: string
    left: string
    top: string
};

interface Target {
    target: string;
    handleFind: Function
    coords: { left: string, top: string }
}

type Coords = {
    left: string, top: string
}

const Dot = (props: Target) => {
    const [color, setColor] = useState(randomColor());
    const [coords, setCoords] = useState<Coords>({
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`
    });
    const [found, setFound] = useState(false)
    const [dotStyle, setDotStyle] = useState<PlaceDot>();


    useEffect(() => {
        let size = Math.random() * 20
        setCoords({
            left: `${Math.random() * 100}vh`,
            top: `${Math.random() * 100}vh`
        })
        setDotStyle(
            {
                backgroundColor: color,
                height: `${Math.random() * 20}px`,
                width: `${Math.random() * 20}px`,
                left: coords.left,
                top: coords.top
            })
    }, [color])


    const handleClick = () => {
        setColor(randomColor());
        setFound(true)
    }

    return (
        <div
            className="dot"
            style={dotStyle}
            onMouseOver={() => handleClick()}
        >
        </div>
    );
};
export default Dot;