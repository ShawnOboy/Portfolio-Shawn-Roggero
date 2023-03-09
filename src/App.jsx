import './sass/App.scss';
import MatrixRain from './Matrix';
import CorruptionLayer from './CorruptionLayer';
import TitleMatrix from './TitleMatrix';

export default function App() {
  return (
    <div className="App">

      <section className='portfolio'>

        <TitleMatrix />

        <div className="screenSpace"></div>
        <div className="portfolioBackground">
            <CorruptionLayer />
            <CorruptionLayer />
        </div>

        <section className='mainPortfolio'>

          

        </section>

      </section>

      <section className='background'>

        <MatrixRain />

      </section>
      
    </div>
  );
}