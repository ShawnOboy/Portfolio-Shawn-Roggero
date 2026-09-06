import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { texts } from '../code/texts';
import { getProjectBySlug } from '../code/projects';
import '../sass/SingleProject.scss';
import Page_404 from './Page_404';

export default function SingleProject({ lang }) {
  const { slug } = useParams();

  const project = useMemo(() => {
    if (!slug) return null;
    return getProjectBySlug(slug, lang);
  }, [slug, lang]);

  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreScreenshots, setShowMoreScreenshots] = useState(false);
  const [showMeta, setShowMeta] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    project?.images?.low || project?.images?.high
  );

  useEffect(() => {
    setImageSrc(project?.images?.low || project?.images?.high);

    if (!project?.images?.high) return;

    const highImage = new Image();
    highImage.src = project.images.high;

    highImage.onload = () => {
      setImageSrc(project.images.high);
    };
  }, [project]);

  if (!project) {
    return <Page_404 lang={lang} variant="project" />;
  }

  const projectTexts = texts[lang]?.project ?? texts.en.project;
  const description = Array.isArray(project.description)
    ? project.description
    : [project.description];

  const visibleDescription = showMoreDescription
    ? description
    : description.slice(0, 3);

  const screenshots = project.images?.screenshots ?? [];
  const visibleScreenshots = showMoreScreenshots ? screenshots : screenshots.slice(0, 6);

  const renderTags = (tags = []) => {
    return (tags ?? []).map((tag, index) => {
      const label = texts[lang]?.tags?.[tag] ?? tag;

      return (
        <span key={`${tag}-${index}`} className="tag-badge">
          {label}
        </span>
      );
    });
  };

  const renderLinks = (links = []) => {
    return links.map((link, index) => {
      const label =
        link.label?.[lang] ??
        link.label?.en ??
        link.displayedName ??
        projectTexts.linkLabel;

      return (
        <a
          key={`${label}-${index}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link trapezoid-button"
        >
          {label}
        </a>
      );
    });
  };

  const renderMetaValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }

    return value;
  };

  return (
    <div className="SingleProject">
      
      <div className="project-footer">
        <Link to="/home" className="back-link trapezoid-button">
          Back to home
        </Link>
      </div>

      <section className="project-hero">
        <div className="banner-image">
          <img
            src={imageSrc}
            alt={project.name}
            className="banner-image-current"
          />
        </div>

        <div className="project-highlights">
          <h2>{projectTexts.highlightsTitle}</h2>
          <ul>
            {(project.highlights ?? []).map((highlight, index) => (
              <li key={`${highlight}-${index}`}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-content">
        <div className="project-tags">
          {renderTags(project.tags?.[lang] ?? [])}
        </div>

        <div className="project-description">
          {visibleDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {description.length > 3 && (
            <button
              type="button"
              className="text-toggle trapezoid-button"
              onClick={() => setShowMoreDescription((value) => !value)}
            >
              {showMoreDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="project-links-block">
          <h2>Check out more</h2>
          <div className="project-links">
            {renderLinks(project.links)}
          </div>
        </div>

        {screenshots.length > 0 && (
          <section className="project-screenshots">
            <h2>Screenshots</h2>
            <div className="screenshots-grid">
              {visibleScreenshots.map((screenshot, index) => (
                <img
                  key={`${screenshot}-${index}`}
                  src={screenshot}
                  alt={`${project.name} screenshot ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>

            {screenshots.length > 6 && (
              <button
                type="button"
                className="text-toggle trapezoid-button"
                onClick={() => setShowMoreScreenshots((value) => !value)}
              >
                {showMoreScreenshots ? 'Show less screenshots' : 'Show all screenshots'}
              </button>
            )}
          </section>
        )}

        <div className="project-meta">
          <button
            type="button"
            className="meta-toggle trapezoid-button"
            onClick={() => setShowMeta((value) => !value)}
          >
            {showMeta ? 'Hide meta' : 'Show meta'}
          </button>

          {showMeta && (
            <div className="meta-panel">
              <p><strong>Engine:</strong> {project.meta?.engine}</p>
              <p><strong>Dimension:</strong> {project.meta?.dimension}</p>
              <p><strong>Role:</strong> {renderMetaValue(project.meta?.role)}</p>
              <p><strong>Team size:</strong> {project.meta?.teamSize}</p>
              <p><strong>Year:</strong> {project.meta?.year}</p>
              <p><strong>Type:</strong> {project.meta?.type}</p>

              {project.meta?.highlights?.length > 0 && (
                <>
                  <h3>Meta highlights</h3>
                  <ul>
                    {project.meta.highlights.map((item, index) => (
                      <li key={`${item}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}