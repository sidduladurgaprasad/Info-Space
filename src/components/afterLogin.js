import {Route,Routes,Link} from 'react-router-dom';
import './home.css';
import axios from 'axios'
import { useState,useEffect } from 'react';
import iss1 from './images/iss.gif';
import astronaut from './images/Astronaut.jpg'
import './afterLogin.css';
import Iss from './Iss';
import { Button } from 'bootstrap';
function Afterlogin() {
    let [people,setAstronauts]=useState([])
    let [error,setError]=useState('')
    useEffect(() => {
        axios.get("http://api.open-notify.org/astros.json")
            .then(response => setAstronauts(response.data.people))
            .catch(err => setError(err.message))
    }, [])

    let [spacecraft,setSpacecraft]=useState([])
    useEffect(() => {
            axios.get("https://isro.vercel.app/api/spacecrafts")
                .then(response => setSpacecraft([response.data]))
                .catch(err => setError(err.message))
        }, [])
    
        let [launchers, setLaunchers] = useState([])
        useEffect(() => {
            axios.get("https://isro.vercel.app/api/launchers")
                .then(response => setLaunchers(response.data.launchers))
                .catch(err => setError(err.message))
        }, [])
    
        let [customer_satellites, setCustomersatellites] = useState([])
        useEffect(() => {
            axios.get("https://isro.vercel.app/api/customer_satellites")
                .then(response => setCustomersatellites(response.data.customer_satellites))
                .catch(err => setError(err.message))
        }, [])
    //console.log(people);
    return (
        <div className='content'>
            <h1 className='planet'>HERE ARE YOUR ADDITIONAL FEATURES</h1>
            <div>
                <div className="card card-body p-0 m-3 rounded text-center w-50 d-block mx-auto">
                <div>
                    <Link to="/Iss"><img src={iss1} className="w-100 rounded" /></Link>
                    <div>
                        YOU CAN KNOW ABOUT...
                        <ul>
                            <li>WHAT IS ISS?</li>
                            <li>PURPOSE OF ISS?</li>
                            <li>CONSTRUCTION OF ISS?</li>
                            <li>STRUCTURE OF ISS?</li>
                            <li>LIVE LOCATION OF ISS?</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <h2>Details of Astronauts are:</h2>
            <p className='text-center'>Number of Astronauts are 10</p>
            <div className="card card-body p-0 m-3  bg-info rounded text-center w-25">
                <div className="d-flex">
                    <div>
                        <img src={astronaut} className="w-100 rounded mx-auto" />
                    </div>
                </div>
            </div>
            <div className='container'>
            {error !== '' && <p className='h1 text-danger'>{error}</p>}

            {people.length == 0 && <p className='display-1 text-danger'>No data</p>}

            {people.length !== 0 &&
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>craft</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            people.map((astronautObj) => (<tr key={astronautObj.name}>
                                <td>{astronautObj.name}</td>
                                <td>{astronautObj.craft}</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            }
            </div>
        </div>
    );
}
  
export default Afterlogin