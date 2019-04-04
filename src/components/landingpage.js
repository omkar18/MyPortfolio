import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
  render(){

    const landinggrid = {
      background: '#8A2387',
      background: '-webkit-linear-gradient(to left, #F27121, #E94057, #8A2387)',
      background: 'linear-gradient(to left, #F27121, #E94057, #8A2387)',
      position:'fixed',
      top: '0',
      left: '0',
      width:'100%',
      height:'100%',
      textAlign:'center'
  }

  const avatarImg = {
    height: '200px',
    paddingTop: '5em'
  }

  const bannertextPara = {
    color: 'white',
    fontSize: '20px',
    padding: '1em'
  }
    return(
      <div style={{width: '100%',margin: 'auto'}}>
        <Grid style={landinggrid}>
          <Cell col={12}>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
            alt="avatar" style={avatarImg}/>

            <div className="banner-text">
              <h1>Full Stack Web Developer....!</h1>
              <hr/>
              <p style={bannertextPara}> HTML/CSS | JavaScript | React | MongoDb | Angular </p>

              <div className="social-links">
                  {/*Linked-in icon */}
                <a href="http://google.com" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                    {/*Github icon */}
                    <a href="http://google.com" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                    {/*Freecodecamp icon */}
                    <a href="http://google.com" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true"/>
                </a>

                    {/*youtube icon */}
                    <a href="http://google.com" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true"/>
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