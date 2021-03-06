import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Textfield,
  TextfieldProps
} from "react-mdl";
import Map from './map';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }


  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.what3words.com/sdk/v3/what3words.js?key=J0YTTNEP";
    this.div.appendChild(script);

    const script2 = document.createElement("script");
    script2.async = true;
    script2.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3UtX5ItKVQtn6vT9GHJ4FZzwveFqlnuY	";
    this.div.appendChild(script2);  
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false,
    });
  }
  reportToPolice = () => {
    console.log(this.props);
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2017/gambia_presser_1-18-17.jpg?itok=1jrRtAVx) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button onClick={this.handleOpenDialog} colored>
                Report Emergency
              </Button>
            </CardActions>

            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
            <Dialog open={this.state.openDialog}>
              <DialogTitle>Report Crime?</DialogTitle>
              <div className="App" ref={el => (this.div = el)}>
                <hr/>

                {/* Script is inserted here */}
              </div>
              <DialogContent>
                <p>
                  Allowing us to collect data will let us get you the
                  information you want faster.
                </p>
                {/* Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  label="Name"
                  floatingLabel
                  style={{ width: "200px" }}
                />

                {/* Numeric Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  error="Input is not a number!"
                  label="Mobile Number"
                  floatingLabel
                />
                {/* Numeric Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  label="Address"
                  floatingLabel
                />
                <what3words-autosuggest/>
                <Map />

                
                <Map
                  centerAroundCurrentLocation
                  className="map"
                  google={this.state.activeTab}
                  style={{ height: '100%', position: 'relative', width: '100%' }}
                  zoom={14}
                />


              </DialogContent>
              <DialogActions>
                <Button type="button">Agree</Button>
                <Button type="button" onClick={this.handleCloseDialog}>
                  Disagree
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="fire-rescue">
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/media/Cvxk5q7WEAE6ufL.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>Report Emergency</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="paramedics">
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://observer.ug/images/SK-Mbuga-ambulance.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>Report Emergency</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
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
          <Tab>Police</Tab>
          <Tab>Fire Rescue</Tab>
          <Tab>Paramedics</Tab>
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
