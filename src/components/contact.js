import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h3>Omkar</h3>
          <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height: '150px'}}/>
          <p style={{width:'75%',margin:'auto',paddingTop:'2em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more</p>
          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
      <div className="contact-list">
          <List>
  <ListItem>
    <ListItemContent style={{fontSize:'20px'}}>
    <i className="fa fa-phone-square" aria-hidden="true"/>
    (+91)4555897654
    </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize:'20px'}}>
    <i className="fa fa-fax" aria-hidden="true"/>
    test@gmail.com
    </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize:'20px'}}>
    <i className="fa fa-envelope" aria-hidden="true"/>
    Test@gmail.com
    </ListItemContent>
  </ListItem>
        </List>
</div>



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;