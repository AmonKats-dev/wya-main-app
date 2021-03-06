import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://th.bing.com/th/id/OIP.H3o551zdhHMJCGO-h5sKhAHaEf?pid=Api&rs=1"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Where You Are</h1>

            <hr/>

         <p>Reach Us on our social media platforms</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
