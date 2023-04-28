import React from "react";
import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import novaG from "../assets/img/novaG.png";
import nocoL from "../assets/img/nocoLand.png";
import lightM from "../assets/img/lightMatch.png";

export const Projects = () => {

    const projects = [
        {
            title: "Halo Arena Tracker",
            description: "Android App Development (GooglePlay Published)",
            imgUrl: projImg1,
        },
        {
            title: "G3T.Store Website",
            description: "Design & Development (www.g3t.store)",
            imgUrl: projImg2,
        },
        {
            title: "Matching Word Game",
            description: "Android Design & Development (GooglePlay Published)",
            imgUrl: projImg3,
        },
        {
            title: "NovaGundam.com",
            description: "Web Design & Development (novagundam.com)",
            imgUrl: novaG,
        },
        {
            title: "Norther Colorad Landscaping",
            description: "Business Web Design & Development (nocolandscaping.com)",
            imgUrl: nocoL,
        },
        {
            title: "Little Light Match",
            description: "Unity App Design & Development (GooglePlay Published)",
            imgUrl: lightM,
        },
    ];


    const webdev = [
        {
            title: "G3T.Store Website",
            description: "Design & Development (www.g3t.store)",
            imgUrl: projImg2,
        },
        {
            title: "NovaGundam.com",
            description: "Web Design & Development (novagundam.com)",
            imgUrl: novaG,
        },
        {
            title: "Norther Colorad Landscaping",
            description: "Business Web Design & Development (nocolandscaping.com)",
            imgUrl: nocoL,
        },
    ];

    const androidev = [
        {
            title: "Halo Arena Tracker",
            description: "Android App Development (GooglePlay Published)",
            imgUrl: projImg1,
        },
        {
            title: "Matching Word Game",
            description: "Android Design & Development (GooglePlay Published)",
            imgUrl: projImg3,
        },
        {
            title: "Little Light Match",
            description: "Unity App Design & Development (GooglePlay Published)",
            imgUrl: lightM,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I have completed a diverse range of projects throughout my career as a software engineer.
                            These projects include developing Android apps for Google Play, building eCommerce websites, creating games using the Unity engine, and designing & developing business websites.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                         <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Web Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Android Projects
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                            {
                                                webdev.map((webdevs, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...webdevs}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                            {
                                                androidev.map((androidevs, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...androidevs}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bgimage"></img>
        </section>
    )
}