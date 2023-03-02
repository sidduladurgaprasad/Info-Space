import './planets.css'
import p0 from './components/images/mainexo.gif'
import p1 from './components/images/Exodis.jpg'
import c from './components/images/classexo.png'
import t1 from './components/images/Gasgaint.jpg'
import t2 from './components/images/Superearth.jpg'
import t3 from './components/images/Neptunelike.jpg'
import t4 from './components/images/Terrestrial.jpg'
import d1 from './components/images/superearthdata.png'
import g1 from './components/images/distancegraph.png'
import g2 from './components/images/tempgraph.png'
import g3 from './components/images/r&mgraph.png'
function Exoplanets() {
  
    return (
     <div>
         <img src={p0} className='w-100 rounded'></img>
         <h1 className='head'>CLASSIFICATION OF EXOPLANETS</h1>
         <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
               <div class="card">
               <img src={t1} className="card-img-top p-2" width="140" height="150"></img>
                  <div className="card-body p-2 m-4  bg-info  rounded text-center w-50">
                     <h4 className='card-title p-2'>GAS GAINTS</h4>
                              <p>A gas giant is a large planet mostly composed of</p>
                              <p>helium and/or hydrogen. These planets don’t have </p>
                              <p>hard surfaces and instead have swirling gases above </p>
                              <p>a solid core. Gas giant exoplanets can be much larger</p>
                              <p>than Jupiter, and much closer to their stars than </p>
                              <p>anything found in our solar system.</p>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
               <img src={t2} className="card-img-top p-2" width="140" height="150"></img>
                  <div className="card-body p-2 m-4  bg-info  rounded text-center w-50">
                     <h4 className='card-title p-2'>SUPER EARTHS</h4>
                              <p>Super-Earths – a class of planets unlike any in</p>
                              <p>our solar system – are more massive than Earth</p>
                              <p>yet lighter than ice giants like Neptune and Uranus,</p>
                              <p>and can be made of gas, rock or a combination of</p>
                              <p>both. They are between twice the size of Earth and</p>
                              <p>up to 10 times its mass.</p>
                              
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
               <img src={t3} className="card-img-top p-2" width="140" height="150"></img>
                  <div className="card-body p-2 m-4  bg-info  rounded text-center w-50">
                  <h4 className='card-title p-2'>NEPTUNE LIKE</h4>
                              <p>Neptunian exoplanets are similar in size to Neptune</p>
                              <p>or Uranus in our solar system.Neptunian planets </p>
                              <p>typically have hydrogen and helium-dominated</p>
                              <p>atmospheres with cores or rock and heavier metals.</p>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
               <img src={t4} className="card-img-top p-2" width="140" height="150"></img>
                  <div className="card-body p-2 m-4  bg-info  rounded text-center w-50">
                     <h4 className='card-title p-2'>TERRESTRIAL</h4>
                              <p>In our solar system, Earth, Mars, Mercury and Venus</p>
                              <p>are terrestrial, or rocky, planets. For planets outside</p>
                              <p>our solar system, those between half of Earth’s size</p>
                              <p>to twice its radius are considered terrestrial and </p>
                              <p>others may be even smaller. </p>      
                  </div>
               </div>
            </div>
         </div>
         <img src={p1} className='w-100 rounded'></img>
         <h1 className='head'>15 EXOPLANETS NEAR TO EARTH</h1>
         <img src={d1} className='w-100 rounded'></img>
         <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
               <div class="card">
                  <div class="card-body">
                  <img src={g1} className='w-100 rounded'></img>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="card">
                  <div class="card-body">
                  <img src={g2} className='w-100 rounded'></img>
                  </div>
               </div>
            </div>
         </div>
         <h1 className='head'>RADIUS AND MASS OF EXOPLANETS</h1>
         <img src={g3} className='w-100 rounded'></img>
     </div>
    );
  }
  
  export default Exoplanets;

