import './home.css';
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import img1 from './components/images/main.gif';
import planetsimg from './components/images/ourplanets.jpg';
import dwaftplanetsimg from './components/images/Dwarf-Planets.jpg';
import exoplanetsimg from './components/images/exoplanets.jpg';
import {Route,Routes,Link} from 'react-router-dom';
import Planets from './planets';


function Home() {
   return (
      <div>
          <div className="card bg-dark text-white">
            <img src={img1} className='card-img w-100 rounded'></img>
            <div className="card-img-overlay"> 
                  <h1 className='card-title'>INFOSPACE</h1>
            </div>
          </div>
          <h1 className='planet'>PLANETS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
               <div className="col">
                  <div className="card h-100">
                     <div className="card-body">
                        <Link to="Planets"><img src={planetsimg} className="w-100 rounded" /></Link>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100">
                     <div class="card-body">
                        <Link to="Dwarfplanets"><img src={dwaftplanetsimg} className="w-100 rounded"/></Link>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100">
                     <div class="card-body">
                        <Link to="Exoplanets"><img src={exoplanetsimg} className="w-100 rounded"/></Link>
                     </div>
                  </div>
               </div>
            </div>
      </div>
     );
  }
  
  export default Home;

