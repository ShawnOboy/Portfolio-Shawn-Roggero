import './sass/TitleMatrix.scss';
import Typical from 'react-typical';

export default function TitleMatrix() {

    return (

        <div className='titleMatrix'>

            <h1>

                <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        "", 1000,
                        "Portfolio", 1000,
                        "Portfolio Shawn Roggero", 3000,
                        "", 1000,
                        "Étudiant", 1000,
                        "Étudiant Maisonneuve", 3000
                    ]}
                />

            </h1>

        </div>

    )

}