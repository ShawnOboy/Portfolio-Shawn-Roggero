import '../sass/HomePage.scss';
import { texts } from '../code/texts';
import { projects as allProjects } from '../code/projects';
import { Link } from 'react-router-dom';
import Resume from '../Resume_Roggero_Shawn.pdf';
import About from './About';
import Projects from './Projects';

// ----- Default export for Home Page -----

export default function HomePage({ lang }) {

  // ----- Content for Home Page -----
  const heroTexts = texts[lang]?.heroSection ?? texts.en.heroSection;
  const projects = allProjects[lang] ?? allProjects.en;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="HomePage">

      {/* ----- Hero Section ----- */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{heroTexts.heroTitle}</h1>
          <p className="hero-sub">{heroTexts.heroSubtitle}</p>

          <div className="hero-ctas">
            <button
              type="button"
              className="trapezoid-button"
              onClick={scrollToProjects}
            >
              {heroTexts.projectsButton}
            </button>
            {/* <button type="button" className="btn btn-primary trapezoid-button" onClick={scrollToProjects}>
              {homeTexts.projectsButton}
            </button> */}
            <div className="resume-actions">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={Resume}
                className="trapezoid-button trapezoid-button--ghost"
              >
                <span className="trapezoid-button__inner">
                  {heroTexts.cv}
                </span>
              </a>

              <a
                href={Resume}
                download="resume_roggero_shawn.pdf"
                className="trapezoid-button trapezoid-button--ghost download-button"
                aria-label={heroTexts.downloadCv}
              >
                <span className="trapezoid-button__inner">
                  ↓
                </span>
              </a>
            </div>
            {/* <a target="_blank" rel="noopener noreferrer" href={Resume} className="btn btn-outline trapezoid-button">
              {homeTexts.cv}
            </a> */}
          </div>
        </div>
      </header>

      {/* ----- About Section ----- */}
      <section className="home-section">
        <About lang={lang} />
      </section>

      {/* ----- Projects Section ----- */}
      <section id="projects" className="home-section">
        <Projects lang={lang} projects={projects} />
      </section>

    </main>
  );
}