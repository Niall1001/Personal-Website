import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { headShake, fadeInLeftBig } from 'react-animations';

const styles = {
  bannerFadeIn: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  imageFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  socialFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(headShake, 'headShake'),
  },
};

class Landing extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className='landing-grid'>
            <Cell col={12}>
              <div className='avatar-toolbar-splitter'></div>
              <div className='banner-text' style={styles.bannerFadeIn}>
                <h5 style={styles.textFadeIn}>Hi, I am </h5>
                <h1 style={styles.textFadeIn}>Niall Walters.</h1>
                <h2 style={styles.textFadeIn}>I am a Graduate Software Engineer / Computer Scientist</h2>
                <p style={styles.textFadeIn}>With Experience in the following:</p>
                <p style={styles.textFadeIn}>
                  HTML/CSS | JavaScript | React | NodeJS |
                  ExpressJS | MongoDB/PostgreSQL | SQL | Java Spring | Openshift/Jenkins
                </p>

                <div className='social-links' style={styles.imageFadeIn}>
                  {/* LinkedIn */}
                  <a
                    href='https://www.linkedin.com/in/niall-walters-a72a261b1/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i
                      className='fa fa-linkedin-square tex-black'
                      aria-hidden='true'
                    />
                  </a>

                  {/* Github */}
                  <a
                    href='https://github.com/Niall1001'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-github-square' aria-hidden='true' />
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Landing;
