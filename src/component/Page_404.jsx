import { Link } from 'react-router-dom';
// import './Page_404.scss'

export default function Page_404({ lang, variant = 'page' }) {
  const isProject = variant === 'project';

  return (
    <div className="Page_404">
      <div className="project-footer">
        <Link className="btn btn--trapezoid" to="/home">
          <span className="btn__shape">Back to home</span>
        </Link>
      </div>

      <h1>
        {isProject ? 'Project not found | Error 404' : 'Page not found | Error 404'}
      </h1>
    </div>
  );
}