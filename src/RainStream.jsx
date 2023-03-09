import { useState } from "react";
import useInterval from "@use-it/interval"

const validChar = "01";
const changeProbability = 0.02;

const minStreamSize = 15;
const maxStreamSize = 50;

const getRandStreamSize = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () => validChar.charAt(Math.floor(Math.random() * validChar.length));

const getRandStream = () => new Array(getRandStreamSize(minStreamSize, maxStreamSize)).fill().map(_ => getRandChar());

const changeStream = stream => {
    const newStream = [];
    for (let i = 1; i < stream.length; i++) {
        
        if(Math.random() < changeProbability) {
            newStream.push(getRandChar());
        }
        else {
            newStream.push(stream[i]);
        }
        
    }
    newStream.push(getRandChar());
    return newStream;
}

const RainStream = props => {
    
    const [stream, setStream] = useState(getRandStream());
    const [topPadding, setTopPadding] = useState(stream.length * -50);

    useInterval(() => {
        if(topPadding > window.innerHeight) {

            setStream(getRandStream());
            setTopPadding(stream.length * -50);

        }
        else {

            setTopPadding(topPadding + (window.innerWidth / 71.641791));
            setStream(changeStream);

        }

    }, 100);

    return (
        <div style={{
            marginTop: topPadding,
            color: '#ff7b00',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            textShadow: '0px 0px 8px rgba(194, 104, 14, 0.8)',
            fontSize: window.innerWidth / 76.8,
        }}>

            {stream.map((char, index) =>
            <a style={{
                color: index == stream.length -1 ? '#fff' : undefined,
                opacity: index < 30 ? 0.1 + index * 0.05 : 1,
                textShadow: index == stream.length -1 ? '0px 0px 20px rgba(255, 255, 255, 1)' : undefined,
                marginTop: -5}}>
                    
                {char}

            </a>)}

        </div>

    );
}

export default RainStream;