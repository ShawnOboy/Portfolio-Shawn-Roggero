import { useEffect, useState } from 'react';
import './sass/CorruptionLayer.scss';

export default function CorruptionLayer({number}) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const getTabCorruption = () => new Array(number).fill().map(() => {
        
        const height = Math.floor(Math.random() * 31) + 69 + "%";
        const width = window.innerWidth/number + "px";
        
        return <div style={{height: height, width: width}} ></div>;
        
    })
    
    const tabCorruption = getTabCorruption();
    
    const onScroll = () => {
        const scroll = window.scrollY;
        setScrollPosition(scroll);
        getTabCorruption(scroll);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);

    return (
        
        <div className="portfolioBackground">

            <section>
                {tabCorruption}
            </section>
            <section>
                {tabCorruption}
            </section>

        </div>

    )

}