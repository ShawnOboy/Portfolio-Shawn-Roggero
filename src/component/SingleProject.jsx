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

  const singleProjectTexts = texts[lang]?.singleProjectSection ?? texts.en.singleProjectSection;

  const description = Array.isArray(project.description)
    ? project.description
    : [project.description];

  const visibleDescription = showMoreDescription
    ? description
    : description.slice(0, 3);

  const screenshots = project.images?.screenshots ?? [];

  const visibleScreenshots = showMoreScreenshots
    ? screenshots
    : screenshots.slice(0, 6);

  const renderTags = (tags = []) => {
    return tags.map((tag, index) => {
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
        singleProjectTexts.linksTitle;

      return (
        <a
          key={`${label}-${index}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
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

      <div className="project-top-nav">
        <Link to="/home" className="back-link trapezoid-button trapezoid-button--ghost">
          <span className="trapezoid-button__inner">
            {singleProjectTexts.backButton}
          </span>
        </Link>
      </div>

      <header className="project-heading">
        <h1>{project.name}</h1>
      </header>

      <section className="project-hero">
        <div className="banner-image">
          <img
            src={imageSrc}
            alt={project.name}
            className="banner-image-current"
          />
        </div>

        <div className="project-highlights">
          <h2>{singleProjectTexts.highlightsTitle}</h2>

          <ul>
            {(project.highlights ?? []).map((highlight, index) => (
              <li key={`${highlight}-${index}`}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-content">

        <div className="project-tags">
          {renderTags(project.tags?.[lang] ?? [])}
        </div>

        <section className="project-description-section">
          <h2>{singleProjectTexts.description}</h2>

          <div className="project-description">
            {visibleDescription.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            {description.length > 3 && (
              <button
                type="button"
                className="text-toggle trapezoid-button"
                onClick={() => setShowMoreDescription((value) => !value)}
              >
                {showMoreDescription
                  ? singleProjectTexts.readLessButton
                  : singleProjectTexts.readMoreButton}
              </button>
            )}
          </div>
        </section>

        {project.links?.length > 0 && (
          <section className="project-links-block">
            <h2>{singleProjectTexts.linksTitle}</h2>

            <div className="project-links">
              {renderLinks(project.links)}
            </div>
          </section>
        )}

        <section className="project-meta">
          <button
            type="button"
            className="meta-toggle trapezoid-button trapezoid-button--ghost"
            onClick={() => setShowMeta((value) => !value)}
          >
            <span className="trapezoid-button__inner">
              {showMeta ? singleProjectTexts.metaTitle[0] : singleProjectTexts.metaTitle[1]}
            </span>
          </button>

          {showMeta && (
            <div className="meta-panel">
              <p>
                <strong>{singleProjectTexts.meta.engine}:</strong> {project.meta?.engine}
              </p>

              <p>
                <strong>{singleProjectTexts.meta.dimension}:</strong> {project.meta?.dimension}
              </p>

              <p>
                <strong>{singleProjectTexts.meta.role}:</strong>{' '}
                {renderMetaValue(project.meta?.role)}
              </p>

              <p>
                <strong>{singleProjectTexts.meta.teamSize}:</strong>{' '}
                {project.meta?.teamSize}
              </p>

              <p>
                <strong>{singleProjectTexts.meta.year}:</strong> {project.meta?.year}
              </p>

              <p>
                <strong>{singleProjectTexts.meta.type}:</strong> {project.meta?.type}
              </p>

              {project.meta?.highlights?.[lang]?.length > 0 && (
                <>
                  <h3>{singleProjectTexts.meta.highlights}</h3>

                  <ul>
                    {project.meta.highlights?.[lang]?.map((item, index) => (
                      <li key={`${item}-${index}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </section>

        {screenshots.length > 0 && (
          <section className="project-screenshots">
            <h2>{singleProjectTexts.screenshotsTitle}</h2>

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
                onClick={() =>
                  setShowMoreScreenshots((value) => !value)
                }
              >
                {showMoreScreenshots
                  ? singleProjectTexts.screenshots[0]
                  : singleProjectTexts.screenshots[1]}
              </button>
            )}
          </section>
        )}

      </section>

      <div className="project-bottom-nav">
        <Link to="/home" className="back-link trapezoid-button trapezoid-button--ghost">
            <span className="trapezoid-button__inner">
              {singleProjectTexts.backButton}
            </span>
        </Link>
      </div>

    </div>
  );
}