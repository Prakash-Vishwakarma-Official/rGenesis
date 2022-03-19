import React from 'react'
import "./Our_team_Passionate.css";
import img1 from "./assets/Our_team_person1.jpg";
import img2 from "./assets/Our_team_person2.jpg";
import img3 from "./assets/Our_team_person3.jpg";
import img4 from "./assets/Our_team_person4.jpg";

const Our_team_Passionate = () => {
    return (
        <>
            <div className="Our_team_Passionate">
                <div className="M_top_bottom">
                    <div className="Our_team_Passionate_Left">
                        <h3>Passionate people on our team</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                    </div>
                    <div className="Our_team_Passionate_right">
                        <div className="Our_team_Passionate_right_div_1">
                            <div>
                                <img src={img1} alt="" className="img_width" />
                            </div>
                            <span>
                                <h4>Jessica Doe</h4>
                                <p>CEO</p>
                                <p>CEO</p>
                            </span>
                        </div>
                        <div className="Our_team_Passionate_right_div_2">
                            <span>
                                <img src={img2} alt="" className="img_width" />
                            </span>
                            <span>
                                <h4>Jessica Doe</h4>
                                <p>CEO</p>
                                <p>CEO</p>
                            </span>
                        </div>
                        <div className="Our_team_Passionate_right_div_3">
                            <span>
                                <img src={img3} alt="" className="img_width" />
                            </span>
                            <span>
                                <h4>Jessica Doe</h4>
                                <p>CEO</p>
                                <p>CEO</p>
                            </span>
                        </div>
                        <div className="Our_team_Passionate_right_div_4">
                            <span>
                                <img src={img4} alt="" className="img_width" />
                            </span>
                            <span>
                                <h4>Jessica Doe</h4>
                                <p>CEO</p>
                                <p>CEO</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_team_Passionate