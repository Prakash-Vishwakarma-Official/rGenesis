import React from 'react';
import "./Casestudy.css";
// import img1 from "./assets/casestudy/watch.jpg";
// import img1 from "./assets/casestudy/watch.jpg";

const Casestudy = (props) => {
    return (
        <>
            <div className="Casestudy">
                <div className="CasestudyLeft animate__animated animate__fadeInLeft">
                    <div className="CasestudyLeftImg">
                        <img src={props.imgsrc} alt="" />
                    </div>
                </div>
                <div className="CasestudyRight animate__animated animate__fadeInRight animate__delay-1s">
                    <div className="CasestudyRightCuntents">
                        <h6 className="animate__animated animate__bounce">{props.heading}</h6>
                        <h4>{props.title}</h4>
                        <p>{props.paragraph}</p>
                        <button type="button" class="btn btn-primary">More details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Casestudy