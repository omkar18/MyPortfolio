import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render(){
    return(
      <div>
          <Grid>
            <Cell col={4}>
            <div style={{textAlign:'center'}}>
            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" style={{height:'150px'}}/>
            </div>
            <h2 style={{paddingTop:'2em'}}> Omkar </h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid blue',width:'50%'}}/>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
            <h5>Address</h5>
            <p>Hacker way Menlo,9331</p>
            <p>Phone</p>
            <h5>(+91)4567896546</h5>
            <p>Email</p>
            <h5>Test@gmail.com</h5>

            </Cell>
            <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
            startYear={2002}
            endYear={2006}
            schoolName="S.B.E.S"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t"
            />

              <Education 
            startYear={2007}
            endYear={2010}
            schoolName="S.B.H.S"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t"
            />
            <hr style={{borderTop:'3px solid blue'}}/>

            <h2>Experience</h2>
            <Experience
            startYear={2011}
            endYear={2015}
            jobName="XYZ"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t"
            />
            <hr style={{borderTop:'3px solid blue'}}/>

             <h2>Skills</h2>
              <Skills 
              skill="JavaScript"
              progress={80}/>

               <Skills 
              skill="React"
              progress={75}/>

               <Skills 
              skill="Angular"
              progress={70}/>
            </Cell>

          </Grid>

        </div>
    )
  }
}

export default Resume;