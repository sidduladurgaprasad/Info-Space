import './home.css';
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import isspos from './images/isspos.png'
import issstr from './images/issstr.png'
import issasm from './images/issasm.gif'
import issstr1 from './images/issstr1.png'
function Iss() {
    //state
    let [iss, setIss] = useState([])
    let [error, setError] = useState('')

    useEffect(() => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => setIss([response.data]))
            .catch(err => setError(err.message))
    }, [])
    console.log("Iss details are:",iss)
    return (
     <div>
        <div>
            <h1 className='planet'>WHAT IS ISS?</h1>
            <p>The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live. The space station is also a unique science laboratory. Several nations worked together to build and use the space station. The space station is made of parts that were assembled in space by astronauts. It orbits Earth at an average altitude of approximately 250 miles. It travels at 17,500 mph. This means it orbits Earth every 90 minutes. NASA is using the space station to learn more about living and working in space. These lessons will make it possible to send humans farther into space than ever before.</p>
            <h1 className='planet'>PURPOSE OF ISS?</h1>
            <p>The ISS provides a platform to conduct scientific research, with power, data, cooling, and crew available to support experiments. Small uncrewed spacecraft can also provide platforms for experiments, especially those involving zero gravity and exposure to space, but space stations offer a long-term environment where studies can be performed potentially for decades, combined with ready access by human researchers.The ISS simplifies individual experiments by allowing groups of experiments to share the same launches and crew time. Research is conducted in a wide variety of fields, including astrobiology, astronomy, physical sciences, materials science, space weather, meteorology, and human research including space medicine and the life sciences.</p>
            <h1 className='planet'>CONSTRUCTION OF ISS?</h1>
            <p>The International Space Station is a multi-nation construction project that is the largest single structure humans ever put into space. Its main construction was completed between 1998 and 2011, although the station continually evolves to include new missions and experiments.The International Space Station (ISS) took 10 years and more than 30 missions to assemble. It is the result of unprecedented scientific and engineering collaboration among five space agencies representing 15 countries. the international space station costs over $150 billion to develop, making it the most expensive thing ever built. Currently, it costs $88,000 to $164,000 per person per day to operate things.</p>
            <h1 className='planet'>STRUCTURE OF ISS?</h1>
            <div>
                <div className='d-flex'>
                    <img src={issstr} className="iss"/>
                    <img src={issstr1} className="iss"/>
                </div>
            <p>The ISS consists of pressurised habitation modules, structural trusses, photovoltaic solar arrays, thermal radiators, docking ports, experiment bays and robotic arms. Major ISS modules have been launched by Russian Proton and Soyuz rockets and US Space Shuttles.The ISS is made up of 17 pressurized modules: six Russian modules (Zarya, Zvezda, Poisk, Rassvet, Nauka, and Prichal), eight US modules ( BEAM,[8] Leonardo, Harmony, Quest, Tranquility, Unity, Cupola, and Destiny), two Japanese modules (the JEM-ELM-PS and JEM-PM) and one European module (Columbus).At least one Russian pressurized module (Pirs) is deorbited till now.
            Although not permanently docked with the ISS, Multi-Purpose Logistics Modules (MPLMs) formed part of the ISS during some Shuttle missions. An MPLM was attached to Harmony (initially to Unity) and was used for resupply and logistics flights.[citation needed]
            Spacecraft attached to the ISS also extend the pressurized volume. At least one Soyuz spacecraft is always docked as a 'lifeboat' and is replaced every six months by a new Soyuz as part of crew rotation. Table below shows the sequence in which these components were added to the ISS. Decommissioned and deorbited Modules are shown in gray.</p>
            <img src={issasm} className="w-100 rounded" />
            </div>
            <h1 className='planet'>LIVE LOCATION OF ISS?</h1>
        </div>
        <div>
            {iss.length !== 0 &&
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>latitude</th>
                            <th>longitude</th>
                            <th>altitude</th>
                            <th>velocity</th>
                            <th>visibility</th>
                            <th>footprint</th>
                            <th>timestamp</th>
                            <th>daynum</th>
                            <th>solar_lat</th>
                            <th>solar_lon</th>
                            <th>units</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            iss.map((issObj) => (<tr key={issObj.latitude}>
                                <td>{issObj.latitude}</td>
                                <td>{issObj.longitude}</td>
                                <td>{issObj.altitude}</td>
                                <td>{issObj.velocity}</td>
                                <td>{issObj.visibility}</td>
                                <td>{issObj.footprint}</td>
                                <td>{issObj.timestamp}</td>
                                <td>{issObj.daynum}</td>
                                <td>{issObj.solar_lat}</td>
                                <td>{issObj.solar_lon}</td>
                                <td>{issObj.units}</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            }
            </div>
         <div>
            <a href="http://wsn.spaceflight.esa.int/iss/index_portal.php"><img src={isspos} className="w-100 rounded" /></a>
         </div>
         <p>Refresh the page to get the current details of the iss</p>
     </div>
    );
  }
  
  export default Iss;