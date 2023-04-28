import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import React from "react";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
     return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                             <p>I am proficient in programming languages such as Java, Python, C#, and have experience working with frameworks such as React, Angular, Vue, and Node.js.
                                 I have skills in database design, management, and administration, with experience in SQL and NoSQL databases.
                                 I am adept at solving complex problems, breaking down large problems into smaller components, and coming up with creative solutions.
                                 I am also an effective communicator with a strong ability to work in teams and collaborate on projects.
                                 Additionally, I am committed to ongoing learning and professional development, keeping up with the latest industry trends and best practices.</p>
                             <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/*Item 1 Goes Here*/}
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Web Development</h5>
                            </div>
                            {/*Item 2 Goes Here*/}
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>Android Development</h5>
                            </div>
                            {/*Item 3 Goes Here*/}
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>UI/UX Design</h5>
                            </div>
                            {/*Item 4 Goes Here*/}
                            <div className="item">
                                <img src={meter1} alt="Image4" />
                                <h5>WordPress</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}