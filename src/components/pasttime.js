import React from "react";
import { Grid, Cell } from "react-mdl";
import Radium, { StyleRoot } from "radium";
import { fadeInLeft, fadeInRight } from "react-animations";
import sailing_1 from "../assets/sailing_1.jpg";
import sailing_2 from "../assets/sailing_2.jpg";
import sailing_3 from "../assets/sailing_3.jpg";
import mountaineering from "../assets/mountaineering.jpg";
import squash from "../assets/squash.jpg";
import Slide from "react-reveal/Slide";
const styles = {
  imageFadeInLeft: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  imageFadeInRight: {
    animationDuration: "2s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
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

const Pasttime = () => {
  return (
    <StyleRoot>
      <Grid>
        <Cell col={4}>
          <div style={styles.leftTextFadeIn}>
          <hr style={{ borderTop: "3px solid #64ffda" }} />
          <h2 style={{ color: "white" }}>In my spare time...</h2>
          </div>
        </Cell>
        <Cell className="resume-right-col" col={8}>
        <Slide left>
        <div style={{ textAlign: "center" }} className='banner-text'>
            
            <h1 style={styles.leftTextFadeIn}>Sailing</h1>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <img
              style={styles.imageFadeInLeft}
              src={sailing_1}
              alt="Avatar"
              className="avatar"
            />
            <img
              style={styles.imageFadeInLeft}
              src={sailing_2}
              alt="Avatar"
              className="avatar"
            />
            <img
              style={styles.imageFadeInLeft}
              src={sailing_3}
              alt="Avatar"
              className="avatar"
            />
            <p style={styles.leftTextFadeIn}>I crew weekly on NHC1 (National Handicap Class) and within a team role, required to think and communicate quickly and immediately adapt to unfolding situations. I am also a member of Queens University Sailing Club.</p>
          </div>
          </Slide>
          <Slide left>
          <div style={{ textAlign: "center" }} className='banner-text'>
            <h1 style={styles.rightTextFadeIn}>Squash</h1>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <img
              style={styles.imageFadeInRight}
              src={squash}
              alt="Avatar"
              className="avatar"
            />
            <p style={styles.rightTextFadeIn}>I am a member of Queens University Squash Club.</p>
          </div>
          </Slide>
          <Slide left>
          <div style={{ textAlign: "center" }} className='banner-text'>
            <h1 style={styles.rightTextFadeIn}>Mountaineering</h1>
            <hr style={{ borderTop: "3px solid #64ffda" }} />
            <img
              style={styles.imageFadeInRight}
              src={mountaineering}
              alt="Avatar"
              className="avatar"
            />
            <p style={styles.rightTextFadeIn}>I regularly take part in indoor bouldering and am a member of the Queens University Mountaineering Club.</p>
          </div>
          </Slide>
        </Cell>
      </Grid>
    </StyleRoot>
  );
};

export default Pasttime;