import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    const headercolor = {
        // background: '#8A2387',
        // background: '-webkit-linear-gradient(to left, #F27121, #E94057, #8A2387)',
        // background: 'linear-gradient(to left, #F27121, #E94057, #8A2387)'
        backgroundImage: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',

    }

    return (
      
      <div className="demo-big-content">
    <Layout>
        <Header style={headercolor} title={<Link style={{textDecoration:'none',color:'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
                <Link style={{textDecoration:'none',color:'black'}}  to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link style={{textDecoration:'none',color:'black'}} to="/projects">Projects</Link>
                <Link  style={{textDecoration:'none',color:'black'}}to="/contact">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
