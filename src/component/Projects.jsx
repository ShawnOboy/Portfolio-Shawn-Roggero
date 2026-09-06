import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { texts } from '../code/texts';
import { getProjects, getFeaturedProjects } from '../code/projects';
import '../sass/Projects.scss';

// ----- Default export for Projects -----
export default function Projects({ lang }) {
  // ----- Texts -----
  const homeTexts = texts[lang]?.home ?? texts.en.home;

  // ----- Data -----
  const allProjects = getProjects(lang);
  const featuredProjects = getFeaturedProjects(lang);

  // ----- Carousel state -----
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const intervalRef = useRef(null);
  const pauseRef = useRef(false);

  // ----- List controls -----
  const [sortBy, setSortBy] = useState('date-desc');
  const [filterEngine, setFilterEngine] = useState('all');
  const [filterDimension, setFilterDimension] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(2);

  // ----- Keep carousel index valid -----
  useEffect(() => {
    if (featuredIndex >= featuredProjects.length) {
      setFeaturedIndex(0);
    }
  }, [featuredIndex, featuredProjects.length]);

  // ----- Auto carousel -----
  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    intervalRef.current = setInterval(() => {
      if (!pauseRef.current) {
        setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
      }
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [featuredProjects.length]);

  const prevFeatured = () => {
    if (featuredProjects.length === 0) return;
    setFeaturedIndex((index) => (index - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const nextFeatured = () => {
    if (featuredProjects.length === 0) return;
    setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
  };

  const currentFeatured = featuredProjects[featuredIndex] ?? null;

  // ----- Helpers -----
  const firstDescriptionLine = (description) => {
    if (!description) return '';
    if (typeof description === 'string') return description;
    if (Array.isArray(description)) return description[0] ?? '';
    if (typeof description === 'object') return Object.values(description)[0] ?? '';
    return '';
  };

  const renderTags = (tags = []) => {
    return (tags ?? []).map((tag, index) => {
      const label = texts[lang]?.tags?.[tag] ?? tag;

      return (
        <React.Fragment key={`${tag}-${index}`}>
          <span className="tag-badge">{label}</span>
          {index < tags.length - 1 && ' '}
        </React.Fragment>
      );
    });
  };

  // ----- Filtered and sorted list -----
  const sortedProjects = useMemo(() => {
    const filteredProjects = allProjects.filter((project) => {
      const matchesEngine = filterEngine === 'all' || project.meta?.engine === filterEngine;
      const matchesDimension = filterDimension === 'all' || project.meta?.dimension === filterDimension;
      const matchesType = filterType === 'all' || project.meta?.type === filterType;
      return matchesEngine && matchesDimension && matchesType;
    });

    return [...filteredProjects].sort((left, right) => {
      if (sortBy === 'date-asc') return (left.meta?.year ?? 0) - (right.meta?.year ?? 0);
      if (sortBy === 'date-desc') return (right.meta?.year ?? 0) - (left.meta?.year ?? 0);
      if (sortBy === 'name-asc') return left.name.localeCompare(right.name);
      if (sortBy === 'name-desc') return right.name.localeCompare(left.name);
      return 0;
    });
  }, [allProjects, filterEngine, filterDimension, filterType, sortBy]);

  const displayedProjects = sortedProjects.slice(0, visibleCount);

  // ----- Reset visible amount on sort/filter change -----
  useEffect(() => {
    setVisibleCount(2);
  }, [sortBy, filterEngine, filterDimension, filterType]);

  return (
    <div className="ProjectsSection">
      {/* ----- Featured Carousel ----- */}
      <section className="featured">
        <h2>{homeTexts.projectsSection}</h2>

        {currentFeatured ? (
          <div
            className="carousel"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}
          >
            <button
              type="button"
              aria-label="Previous featured project"
              className="carousel-nav prev"
              onClick={prevFeatured}
            >
              ‹
            </button>

            <article className="featured-card">
              <Link
                to={`/projects/${currentFeatured.slug}`}
                className="card-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div
                  className="card-media"
                  style={{
                    backgroundImage: `url(${currentFeatured.images?.high || currentFeatured.images?.low})`,
                  }}
                />
                <div className="card-overlay">
                  <h3>{currentFeatured.name}</h3>
                  <p className="card-sub">
                    {firstDescriptionLine(currentFeatured.description)}
                  </p>
                  <div className="card-tags">
                    {renderTags(currentFeatured.tags?.[lang] ?? [])}
                  </div>
                </div>
              </Link>
            </article>

            <button
              type="button"
              aria-label="Next featured project"
              className="carousel-nav next"
              onClick={nextFeatured}
            >
              ›
            </button>
          </div>
        ) : (
          <p className="no-featured">No featured projects</p>
        )}

        {featuredProjects.length > 1 && (
          <div className="carousel-counter">
            {featuredIndex + 1} / {featuredProjects.length}
          </div>
        )}
      </section>

      {/* ----- Controls ----- */}
      <section className="projects-controls">
        <div className="control-group">
          <label htmlFor="sortBy">Sort</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="date-desc">Date: new to old</option>
            <option value="date-asc">Date: old to new</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="filterEngine">Engine</label>
          <select
            id="filterEngine"
            value={filterEngine}
            onChange={(event) => setFilterEngine(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Unity">Unity</option>
            <option value="Unreal">Unreal</option>
            <option value="vanilla-js">JavaScript</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="filterDimension">Dimension</label>
          <select
            id="filterDimension"
            value={filterDimension}
            onChange={(event) => setFilterDimension(event.target.value)}
          >
            <option value="all">All</option>
            <option value="2D">2D</option>
            <option value="3D">3D</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="filterType">Type</label>
          <select
            id="filterType"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
          >
            <option value="all">All</option>
            <option value="school project">School project</option>
            <option value="game jam">Game jam</option>
            <option value="team project">Team project</option>
            <option value="tool">Tool</option>
          </select>
        </div>
      </section>

      {/* ----- Projects List ----- */}
      <section className="projects-list">
        <h3>{homeTexts.projectsSectionListTitle || 'Projects'}</h3>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <article key={project.id} className="project-card">
              <Link
                to={`/projects/${project.slug}`}
                className="card-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(${project.images?.low || project.images?.high})`,
                  }}
                />
                <div className="info">
                  <h4>{project.name}</h4>
                  <p className="preview">
                    {firstDescriptionLine(project.description)}
                  </p>
                  <div className="tags-row">
                    {renderTags(project.tags?.[lang] ?? [])}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {visibleCount < sortedProjects.length && (
          <button
            type="button"
            className="show-more"
            onClick={() => setVisibleCount((count) => count + 2)}
          >
            Show more
          </button>
        )}
      </section>
    </div>
  );
}