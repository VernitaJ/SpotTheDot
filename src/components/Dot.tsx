import randomColor from "randomcolor";
import { useEffect, useState } from "react";

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
    const [color, setColor] = useState(randomColor({ luminosity: 'dark' }));
    const [coords, setCoords] = useState<Coords>({
        left: `${Math.random() * 100}vw`,
        top: `${Math.floor(Math.random() * (100 - 20 + 1) + 15)}vh`
    });
    const [found, setFound] = useState(false)
    const [dotStyle, setDotStyle] = useState<PlaceDot>();

    useEffect(() => {
        let size = Math.random() * 40
        setCoords({
            left: `${Math.random() * 100}vw`,
            top: `${Math.floor(Math.random() * (100 - 20 + 1) + 15)}vh`
        })
        setDotStyle(
            {
                backgroundColor: color,
                height: `${size}px`,
                width: `${size}px`,
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