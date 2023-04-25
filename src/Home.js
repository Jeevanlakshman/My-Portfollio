import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
class Home extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">L.Jeevanantham</h1>
                        <h6 class="myoccupation">Full Stack Developer</h6>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                   Home
                                </a>
                            </li>
                            
                        </ul>
                    </div>

                    <div class="cointainer">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img
                                        src="https://10619-2.s.cdn12.com/reviews/original/725108.jpg"
                                        class="rounded-circle mx-auto d-block"
                                        alt="my photo"
                                        width="130px"
                                        heigth="150px"
                                    />

                                </div>
                                <br />


                            </div>
                            <div class="col-sm-8">
                                <h2 class="myskills">career objective</h2>
                                <br />
                                <p class="skills">
                                    Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
                                    range of programming utilities and languages. Knowledgeable of backend
                                    and frontend development requirements with database management. Handles
                                    any part of the process with ease. 
                                </p>
                               
                            </div>
                            
                            </div>
                            <br />
                            <div class="cointainer">
                                <div class="row">
                                    <div class="col-sm-6">

                                        <h2 class="myskills">Technical skills</h2>
                                        <br />
                                        <ul class="skills">
                                            <li>
                                                Frontend languages - HTML , CSS , JavaScript , React JavaScript,Bootstrap

                                            </li>
                                            <li>
                                                backend languages - nodeJs, API , Express ,es6
                                            </li>
                                            <li>
                                                Database - MySQL , mongoose , MongoDB

                                            </li>
                                            
                                            <img src="https://camo.githubusercontent.com/4fa9a5bdefafee7e59ad2086429306dfc0c902d0db4d2d1fdfb534b1767d9f62/68747470733a2f2f646576656c6f706572732e67697068792e636f6d2f6272616e63682f6d61737465722f7374617469632f6170692d35313264333663303936363236383237313731303861333862626235633537642e676966"></img>
                                            <div className="right-side">
        <div className="about-images">
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/HtmlAbout.png?raw=true" alt="html" />
           <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/CSSAbout.png?raw=true" alt="css" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/JavaScriptSkills.png?raw=true" alt="javascript" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/ReactAbout.png?raw=true" alt="react" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/MongoAbout.png?raw=true" alt="mongodb" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/NoddAbout.png?raw=true" alt="nodejs" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/BootStrapSkills.png?raw=true" alt="bootstrap"/>
          
        </div>
        </div>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <h2 class="myskills">Internship and certification</h2>
                                        <br />
                                        <ul class="skills">

                                            <li>
                                                I Have done Full Stack Developer in guvi Institution
                                            </li>
                                            <li>
                                                I done More over 15+ Projects in guvi Zen class
                                            </li>
                                                                                    
                                        </ul>
                                    </div>
                                    <br />
                                    <div class="col-sm-12">
                                        <h2 class="myskills">projects</h2>
                                        <br />
                                        <table class="table table-dark table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>project Domain</th>
                                                    <th>programming Languages</th>
                                                    <th>project Links</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                           
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td>Html , Css , JavaScript , Bootstrap , crud, React, Router</td>
                                                    <td>
                                                        <a href={"https://github.com/Jeevanlakshman/Dash-board.git"}>crud opration</a>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td>Html , Css , JavaScript , Bootstrap ,  React,</td>
                                                    <td>
                                                        <a href={"https://github.com/Jeevanlakshman/Day---23-price-card.git"}>Data Recharge plan</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td> Bootstrap , HTML,CSS,JavaScript</td>
                                                    <td>
                                                        <a href={"https://github.com/Jeevanlakshman/Day-18-.git"}>Book collection</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-sm-12">
                                        <h2 class="myskills">Education</h2>
                                        <br />
                                        <table class="table table-dark table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Degree</th>
                                                    <th>School/College</th>
                                                    <th>Yop</th>
                                                    <th>percentage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mern Full Stack Developer</td>
                                                    <td>Guvi Institution</td>
                                                    <td>
                                                        2023
                                                    </td>
                                                    <td>90%</td>
                                                </tr>
                                                <tr>
                                                    <td>Bachelor Computer Appliction</td>
                                                    <td>Vysya college</td>
                                                    <td>
                                                        2022
                                                    </td>
                                                    <td>70%</td>
                                                </tr>
                                                <tr>
                                                    <td>12th</td>
                                                    <td>Boys Hr secondary School</td>
                                                    <td>
                                                        2018
                                                    </td>
                                                    <td>75%</td>
                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                  
                                </div>

                            </div>
                            <div class="jumbotron text-center" id="footer">
                            <h2 class="contact">contact</h2>
                            <h6>phone:8608338806</h6>
                            <br/>
                                <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                   
                                   
                                        <a href=""
                                        class="fa fa-linkedin nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://github.com/Jeevanlakshman"
                                        class="fa fa-github nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.instagram.com/jeeva_singlee/="
                                        class="fa fa-instagram nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.facebook.com/hippop.jeeva.9"
                                        class="fa fa-facebook nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                
                                </ul>
                                <br/>
                                <br/>
                                <h6>mail:jeevalakshman6096@gmail.com</h6>
                            </div>
                        </div>

                    </div>
            </body>
        );
    }
}
export default Home;