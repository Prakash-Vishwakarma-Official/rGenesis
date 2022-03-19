import React from "react";
import "./Trusted.css";
import img1 from "./assets/brand-logo1_light.png"
import img2 from "./assets/brand-logo2_light.png"
import img3 from "./assets/brand-logo3_light.png"
import img4 from "./assets/brand-logo4_light.png"
import img5 from "./assets/brand-logo5_light.png"
import img6 from "./assets/brand-logo6_light.png"

const Trusted = () => {
    return (
        <>
            <div className="container-fluid Trusted ">
                <div className="empty"></div>
                <div className="color">
                    <h3 className="text-center trusted_hp animate__animated animate__fadeInUp">Trusted by some of amazing people</h3>
                    <p className="text-center animate__animated animate__fadeInUp">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam nonumy
                    </p>
                </div>
                <div className=" Trusted1">
                    <div className="sub_trusted1 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img1} className="size" alt="..." /></div>
                    </div>
                    <div className="sub_trusted2 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img2} className="size" alt="..." /></div>
                    </div>
                    <div className="sub_trusted3 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img3} className="size" alt="..." /></div>
                    </div>
                    <div className="sub_trusted4 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img4} className="size" alt="..." /></div>
                    </div>
                    <div className="sub_trusted5 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img5} className="size" alt="..." /></div>
                    </div>
                    <div className="sub_trusted6 sub_trusted animate__animated animate__fadeInUp">
                        <div className="img"><img src={img6} className="size" alt="..." /></div>
                    </div>
                </div>
                <div className="empty"></div>
                <div className="empty"></div>
            </div>
        </>
    );
};

export default Trusted;
