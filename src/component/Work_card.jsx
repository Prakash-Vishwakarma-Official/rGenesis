import React from 'react';
import "./Work_card.css";

const Work_card = props => {
    return (
        <>
            <div className ="card Custom_card animate__animated animate__fadeInUp animate__delay-1s" >
                <img src={props.imgsrc}className ="card-img-top"  />
                    <div className ="card-body Custom_card-body">
                        <h5 className ="card-title  Custom_card_title">{props.title}</h5>
                        <p className ="card-text  Custom_card_text">{props.para}</p>
                    </div>
            </div>
        </>
    )
}

export default Work_card