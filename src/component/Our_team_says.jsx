import React from 'react';
import"./Our_team_says.css";
import img1 from "./assets/Our_team_person1.jpg";
import img2 from "./assets/Our_team_person2.jpg";

const Our_team_says = () => {
    return (
        <>
            <div className="Our_team_says">
                <div className="Our_team_says_Left">
                    <div className="card mb-3 bg_color">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img1} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body Cus_card_body">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."</p>
                                    <h5 className="card-title">Oupsum dolor</h5>
                                    <p className="card-text"><small className="text-muted">Creative Director</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Our_team_says_Right">
                    <div className="card mb-3 bg_color">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img2} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body Cus_card_body Cus_card_body_1">
                                    <p className="card-text">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."</p>
                                    <h5 className="card-title">Oupsum dolor</h5>
                                    <p className="card-text"><small className="text-muted">Creative Director</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_team_says