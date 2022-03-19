import React from 'react';
import "./Work.css";
import Work_card from './Work_card';
import img1 from "./assets/work/img1.jpg"
import img2 from "./assets/work/img2.jpg"
import img3 from "./assets/work/img3.jpg"

const Work = () => {
    return (
        <>
            <div className="work">
                <div className="work_title">
                    <h3 className="animate__animated animate__fadeInUp">How we work</h3>
                    <p className="animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sitamet consectetur adipisicing elit ullamut consequatur repellendus amet nemo dignissimos possimus eius fugiat elit ullamut consequatur repellendus amet nemo dignissimos possimus</p>
                </div>
            </div>
            <div className="Work_card_flex">
                <Work_card 
                    imgsrc={img1}
                    title="Prototyping"
                    para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus enim sequi pariatur ipsam assumenda unde tempore rem maxime"
                />
                <Work_card 
                    imgsrc={img2}
                    title="Design & Development"
                    para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus enim sequi pariatur ipsam assumenda unde tempore rem maxime"
                />
                <Work_card 
                    imgsrc={img3}
                    title="User Testing"
                    para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus enim sequi pariatur ipsam assumenda unde tempore rem maxime"
                />
            </div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
        </>
    )
}

export default Work