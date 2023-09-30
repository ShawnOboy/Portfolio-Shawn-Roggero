import './sass/TitleMatrix.scss';
import Typical from 'react-typical';

export default function TitleMatrix({text1, text2, text3}) {
  return (
    <div className='titleMatrix'>
      <h1>
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              text1, 2000,
              text2, 2000,
              text3, 2000
            ]}
          />
      </h1>
    </div>
  )
}