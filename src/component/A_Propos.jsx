// import './A_Propos.scss'

import { texts } from "../code/textes";

export default function A_Propos({langue}) {
  console.log("La langue: " + langue);
  return (
    <div className='A_Propos'>
      <h2>{texts[langue].propos.premier_titre}</h2>
      <p>{texts[langue].propos.premier_texte}</p>
      <h2>{texts[langue].propos.deuxieme_titre}</h2>
      <p>{texts[langue].propos.deuxieme_texte}</p>
      <h2>{texts[langue].propos.troisieme_titre}</h2>
      <p>{texts[langue].propos.troisieme_texte}</p>
    </div>
  );
}