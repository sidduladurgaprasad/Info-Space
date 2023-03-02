import {  Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,NavLink,Link} from 'react-router-dom';
import Aboutus from './components/aboutUs';
import Signup from './components/signUp';
import Home from './home';
import logo from './components/images/logo.png';
import Astronomyterms from './components/astronomyTerms';
import Planets from './planets';
import Login from './components/login';
import Dwarfplanets from './dwarfPlanets';
import Exoplanets from './exoPlanets';
import Afterlogin from './components/afterLogin';
import Iss from './components/Iss';
import { useSelector } from "react-redux";
import { clearLoginStatus } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

function App() {
  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispatch function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/");
  };

  return (
   <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     {isSuccess !== true ? (
                <>
        <div class="container-fluid">
        <div class="container">
          <a class="navbar-brand" href="">
          <Link className="nav-link fs-4" to=""><img src={logo} className="img-fluid animated pulse p-0 "alt="" width="90" height="30"></img></Link>
          </a>
        </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-4" to="">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="astronomyTerms">ASTRONOMYTERMS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="aboutUs">ABOUTUS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="signUp">SIGNUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="login">LOGIN</Link>
              </li>
            </ul>
          </div>
          </div>
          </>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      HOME
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/astronomyTerms">
                      ASTRONOMYTERMS
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/iss">
                      ABOUTUS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <button onClickCapture={userLogout}>LOGOUT</button>
                  </Nav.Item>
                  navigate("/afterlogin")
                </>
              )}
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutUs" element={<Aboutus/>}></Route>
      <Route path="/astronomyTerms" element={<Astronomyterms/>}></Route>
      <Route path="/planets" element={<Planets/>}></Route>
      <Route path="/signUp" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dwarfPlanets" element={<Dwarfplanets/>}></Route>
      <Route path="/exoPlanets" element={<Exoplanets/>}></Route>
      <Route path="/afterLogin" element={<Afterlogin/>}></Route>
      <Route path="/iss" element={<Iss/>}></Route>
    </Routes>
    </div>   
  );
}

export default App;
