import React from "react";
import "./About.css";


    function About(props) {
        console.log(props);
        return(
            <div className="about__container">
                <span>
                    <h1>Movie api</h1>
                    <h2>영화 평점 웹사이트 구현</h2>
                </span>
                <span>
                    <h5>1차 완성<br/>
                        지속적으로 수정예정                        
                    </h5>
                    
                </span>
            </div>    
        );}

export default About;