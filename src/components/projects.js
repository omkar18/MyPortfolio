import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText} from 'react-mdl';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab:0
    }
  }
    toggleCategories() {
      if(this.state.activeTab===0){
        return(
          <div className="projects-grid">
           {/*React project #1*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>React Project #1</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>

          
                     {/*React project #2*/}


    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>React Project #2</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>

                     {/*React project #3*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>React Project #3</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>
</div>
       )
                     {/*Angular project*/}
                    }else if(this.state.activeTab===1){
        return(
<div className="projects-grid">
                     {/*Angular project #1*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Angular Project #1</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>
                     {/*Angular project #2*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Angular Project #2</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>

                     {/*Angular project #3*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Angular Project #3</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>
</div>          )

                     {/*Android project*/}

      }else if(this.state.activeTab===2){
        return(
<div className="projects-grid">

                     {/*Android project #1*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Android Project #1</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>

                     {/*Android project #2*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Android Project #2</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>

                     {/*Android project #3*/}

    <Card shadow={0} style={{minWidth:'450', margin: 'auto'}}>
      <CardTitle style={{color:'#fff',height: '176px',background: 'url(https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg) center/cover'}}>Android Project #3</CardTitle>
      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>View More</Button>
    </CardActions>
    </Card>
</div>          )

      }
    }
  
  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Android</Tab>
        </Tabs>

        <section className="project-grid">
        <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;