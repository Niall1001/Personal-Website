import React from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import TestResults from "./testResults";
import Radium, { StyleRoot } from "radium";
import { fadeInLeft, fadeInRight } from "react-animations";
import gradphoto from "../assets/gradphoto.jpg";
import Slide from "react-reveal/Slide";

const styles = {
  imageFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  leftTextFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  rightTextFadeIn: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  rightcolumnsFadeIn: {
    animationDuration: "3s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

const Resume = () => {
  return (
    <StyleRoot>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              style={styles.imageFadeIn}
              src={gradphoto}
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div style={styles.leftTextFadeIn}>
            <h2 style={{ paddingTop: "2em", color: "white" }}>Niall Walters</h2>
            <h4 style={{ color: "white" }}>Graduate Software Engineer</h4>
            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
            <p style={{ color: "white" }}>
              I have completed my studies at Ulster Universtiy Jordanstown
              obtaining a BSc with First Class Honours in Computing Science and Diploma in Professional Practice with Distinction. 
              I am currently working as a Graduate Software Engineer at &nbsp;
              <Link to="https://citi.com/" style={{ color: "white" }}>
                Citi
              </Link>
            </p>

            <p style={{ color: "white" }}>
              Please do not hesitate to contact me either by the email or phone
              number listed below if you have any enquires about my education or
              cv!.
            </p>
            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
            <h5 style={{ color: "white" }}>Address</h5>
            <p style={{ color: "white" }}>
              5 Scaddy Road, Downpatrick, BT30 9BW
            </p>
            <h5 style={{ color: "white" }}>Phone</h5>
            <p style={{ color: "white" }}>(+44) 7455 003158 </p>
            <h5 style={{ color: "white" }}>Email</h5>
            <a href="niallwalters135@gmail.com" style={{ color: "#64ffda" }}>
              niallwalters135@gmail.com
            </a>

            <h5 style={{ color: "white" }}>Website</h5>
            <Link to="/" style={{ color: "white" }}>
              To be updated with link
            </Link>
            <hr
              style={{
                borderTop: "3px solid #64ffda",
                width: "50%",
                color: "white",
              }}
            />
          </div>
        </Cell>

        <Cell className="resume-right-col" col={8}>
          <div style={styles.leftTextFadeIn}>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Ulster University, Jordanstown"
              degree="BSc with First Class Honours in Computing Science and Diploma in Professional Practice with Distinction"
              link="https://www.ulster.ac.uk/courses/202223/computing-science-25129"
              deans1="Dean's List Award for Outstanding Academic Achievement 2017-2018"
              deans2="Dean's List Award for Outstanding Academic Achievement 2020-2021"
            />

            <TestResults title="Module Results"></TestResults>
          </div>

          <Slide left>
            <hr style={{ borderTop: "3px solid #64ffda" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"July " + 2019}
              endYear={"July " + 2020}
              jobName="Placement Software Engineer"
              company="Citi"
              jobDescription="Backend API development and management using Java Spring framework.
              Scrum master - planning and execution of coding tasks to ensure sprint completion.
              Workplace application and knowledge of Scrum development methodologies.
              Gained insight into the creation, deployment and maintenance of Docker images and the use of OpenShift, uDeploy and TeamCity in a commercial environment to setup and maintain working development applications in different environments (UAT, DEV and PROD).
              Setup of automated pipelines for deployment using Jenkins.
              Working with a team to deliver Java training in-house."
            />
          </Slide>
          <Slide left>
            <Experience
              startYear={"July " + 2021}
              endYear={"Current"}
              jobName="Graduate Software Engineer"
              company="Citi"
              jobDescription="Involvement in a Java Spring based software development team. 
               Actively Developing and maintaining a trade inventory-management application.
               Deploying code from local development environments into UAT/PROD.
               Using code pipelines and continuous integration tools to maintain environments/versions of the application.
               Developing feature integration, bug-fixes, and improvements to upgrade my understanding and knowledge of the Java Spring language and framework, API integration and management and test-driven coding practices.
              "
            />
          </Slide>

          <Slide left>
            <hr style={{ borderTop: "3px solid #64ffda" }} />

            <h2>Technical Skills</h2>

            <ul><li>	ReactJS, AngularJS and NodeJS that are used in conjunction for frontend web development.</li>
            <li>	C#, ExpressJS for backend API development.</li>
            <li>  Development and maintenance of Docker images for continuous integration and deployment.</li>
            <li>	Java Spring framework for backend API development and maintenance.</li>
            <li>	Jenkins and OpenShift to develop and maintain automated deployment pipelines.</li>
            <li>	TeamCity for CI/CD testing and analysis of build failures/successes.</li>
            <li>	uDeploy for the deployment of images into separate environments like UAT/PROD.</li>
            <li>	Postman/Swagger-UI to analyse and debug HTTP requests and API method calls.</li>
            <li>	Understanding the practical application of HTML and CSS in conjunction with backend development to create both responsive and dynamic user-friendly websites.</li>
            <li>	Use of GitHub actions to create continuous code development for a project and help maintain pipelines using the most up-to date GitHub commits to the project’s codebase.</li>
            <li>	Development of projects using No-SQL databases (MongoDB) and SQL databases (MySQL).</li>
            <li>	Implementation of agile methodologies throughout both my placement and graduate role.</li>
            </ul>
          </Slide>

          <Slide left>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <h2>Languages</h2>
            <Skills skill="React" progress={70} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="Windows 7/8/9/10" progress={80} />
            <Skills skill="Postman" progress={80} />
            <Skills skill="Docker" progress={70} />
            <Skills skill="Javascript ES6" progress={75} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="ExpressJS" progress={70} />
            <Skills skill="Github" progress={70} />
            <Skills skill="Java" progress={50} />
            <Skills skill="Mac OS" progress={50} />
            <Skills skill="Jenkins (CI/CD)" progress={60} />
            <Skills skill="OpenShift (Deployment)" progress={60} />
          </Slide>
        </Cell>
      </Grid>
    </StyleRoot>
  );
};

export default Resume;
