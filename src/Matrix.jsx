import RainStream from './RainStream';

const MatrixRain = () => {
    const streamCount = Math.floor(window.innerWidth/20);
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right:0,
            background: 'rgb(0, 0, 0)',
            display: "flex",
            zIndex: -999999
        }}>
            {new Array(streamCount).fill().map(_ => (<RainStream />))}
        </div>

    );
}

export default MatrixRain;