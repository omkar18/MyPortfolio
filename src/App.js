import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    const headercolor = {
        background: '#8A2387',
        background: '-webkit-linear-gradient(to left, #F27121, #E94057, #8A2387)',
        background: 'linear-gradient(to left, #F27121, #E94057, #8A2387)'
    }

    return (
      
      <div className="demo-big-content">
    <Layout>
        <Header style={headercolor} title={<Link style={{textDecoration:'none',color:'white'}} to="/">My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
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
