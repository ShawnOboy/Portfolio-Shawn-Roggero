import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjectBySlug } from '../code/projects';

export default function TitlePage({ lang }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const suffix = ' | Shawn Roggero';

    let newTitle = '';

    if (path === '/' || path === '/home') {
      newTitle = `Portfolio${suffix}`;
    }
    
    else if (path.startsWith('/projects/')) {
      const slug = path.split('/projects/')[1];
      const project = slug ? getProjectBySlug(slug, lang) : null;

      newTitle = project
        ? `${project.name}${suffix}`
        : `${lang === 'en' ? 'Error 404' : 'Erreur 404'}${suffix}`;
    }
    
    else {
      newTitle = `${lang === 'en' ? 'Error 404' : 'Erreur 404'}${suffix}`;
    }

    document.title = newTitle;
  }, [location.pathname, lang]);

  return null;
}