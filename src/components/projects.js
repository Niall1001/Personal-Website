import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
} from "react-mdl";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import Radium, { StyleRoot } from "radium";
import { fadeInLeftBig } from "react-animations";

const styles = {
  leftSideAnimation: {
    animationDuration: "1s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
  },
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleRaised = () =>
    this.setState({
      activeTab: this.state.activeTab,
    });

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <StyleRoot>
          <div className="projects-grid" style={styles.leftSideAnimation}>
            {/* Project 1 */}

            <Card
              shadow={5}
              style={{
                minWidth: "450",
                borderRadius: 5,
                margin: 50,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Personal Website v1
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This is a website I have created using React, HTML and CSS.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>Node, React, Github, Firebase </p>
              </CardText>

              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="Link to be added">
                  <LaunchIcon style={{ marginRight: 10 }} />
                </a>
                <a href="https://github.com/Cheesiewalters/PersonalWebsite">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: 50,
                borderRadius: 5,
                background: "#112240",
                height: 320,
                maxHeight: 320,
              }}
            >
              <CardTitle
                style={{
                  color: "#e6f1ff",
                  height: "140px",
                }}
              >
                Charity Application
              </CardTitle>
              <CardText
                style={{
                  color: "#ccd6f6",
                }}
              >
                This website was created for my final year University Project.
                It is a platform created in React and intergrated with MongoDB. Its aim is to verify and host charitable applications and enable cashless donations towards
                charitable end goals.
              </CardText>
              <CardText
                style={{
                  color: "#8892b0",
                }}
              >
                <p>Node, React, Javascript, MongoDB, Github </p>
              </CardText>
              <CardMenu style={{ color: "#FFFFFF" }}>
                <a href="https://github.com/Niall1001/CharityApplication">
                  <GitHubIcon />
                </a>
              </CardMenu>
            </Card>
          </div>
        </StyleRoot>
      );
      // }
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "#ffffff" }}>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
