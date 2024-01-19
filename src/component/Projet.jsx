import React, { Suspense, useEffect, useState } from 'react';
import '../sass/Projet.scss';
import { texts } from '../code/textes';

export default function Projet({ langue, filtre, lesProjets }) {
  const projetsFiltre = Object.values(lesProjets[filtre] || {});
  const [projetChoisi, setProjetChoisi] = useState(null);

  const choixProjet = (projet) => {
    setProjetChoisi(projet);
  };

  useEffect(() => {
    setProjetChoisi(null);
  }, [langue]);

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <span key={index} className="tag">
        {tag}
      </span>
    ));
  };

  const ImageLoader = ({ lowImg, highImg }) => {
    const [imgSrc, setImgSrc] = useState(lowImg);
  
    useEffect(() => {
      const img = new Image();
      img.src = highImg;
  
      img.onload = () => {
        setImgSrc(highImg);
      };
    }, [highImg]);
  
    return <div className='img_projet' style={{ backgroundImage: `url(${imgSrc})` }}></div>;
  };
  
  const renderProjetSeul = () => {
    if (projetChoisi) {
      const { nom, description, img, lowImg, lien, tag } = projetChoisi;
      return (
        <div className='Projet_seul'>
          <section>
            <button className='fermer_projet' onClick={() => setProjetChoisi(null)}>
              <strong>X</strong>
            </button>
            <div className='img_projet'>
              <Suspense>
                <ImageLoader lowImg={lowImg} highImg={img} />
              </Suspense>
            </div>
          </section>
          <section>
            <h1>{nom}</h1>
            <p>{description}</p>
            <a target="_blank" href={lien}>
              {texts[langue].projet.lien}
            </a>
            <div className="tags">{renderTags(tag)}</div>
          </section>
        </div>
      );
    }
    return null;
  };

  const renderProjet = (projet, index) => (
    <div className='Projet' onClick={() => choixProjet(projet)}>
      <div className='image' key={index} style={{ backgroundImage: `url(${projet.img})` }}></div>
      <div className="overlay">
        <p></p>
        <h1>{projet.nom}</h1>
        <p>{texts[langue].projet.plus}</p>
      </div>
    </div>
  );

  return (
    <div className={`les_Projets ${projetChoisi ? '' : 'multiple-projects'}`}>
      <div className='flex_projets'>
        {renderProjetSeul() || projetsFiltre.reverse().map(renderProjet)}
      </div>
    </div>
  );
}
