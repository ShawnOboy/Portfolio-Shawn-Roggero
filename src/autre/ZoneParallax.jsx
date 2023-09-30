import './sass/ZoneParallax.scss';

export default function ZoneParallax() {

  const tabAlign = ["flex-start", "center", "flex-end"];

  return (
    <div className="ZoneParallax">

      <div className='myosotis' style={{alignSelf: tabAlign[0]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Myosotis Memories - Unity 2D - Gamejam</p>
        <a target="_blank" href="https://shawnoboy.itch.io/myosotis-memories"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='misaryes' style={{alignSelf: tabAlign[1]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Misaryes: Subnebula - Unity 3D</p>
        <a target="_blank" title="En cours de production" href="https://shawnoboy.itch.io"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='dashout' style={{alignSelf: tabAlign[2]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Dash Out - JavaScript</p>
        <a target="_blank" href="https://shawnoboy.itch.io/dash-out"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>


      <div className='aregon' style={{alignSelf: tabAlign[0]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Aregon - Unity 2D</p>
        <a target="_blank" title="À venir" href="https://shawnoboy.itch.io"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='equanimity' style={{alignSelf: tabAlign[1]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Equanimity Travel - Unity 3D</p>
        <a target="_blank" href="https://shawnoboy.itch.io/equanimity-travel"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='memo' style={{alignSelf: tabAlign[2]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Memo - React</p>
        <a target="_blank" href="https://shawnoboy.github.io/Memo-TP1-React/"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='vehicule' style={{alignSelf: tabAlign[0]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Vehicule - 3D</p>
        <a target="_blank" href="https://youtu.be/4eoKbXELx_Y"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

      <div className='talisman' style={{alignSelf: tabAlign[1]}}>
        <p style={{color: "#ff7b00", alignSelf: "flex-end", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", textShadow: "0px 4px #000"}} >Talisman - 3D</p>
        <a target="_blank" href="https://youtu.be/gYSjsJuq6Vk"></a>
        <p className='sideA'></p>
        <p className='sideW'></p>
        <p className='sideH'></p>
      </div>

    </div>

  )

}