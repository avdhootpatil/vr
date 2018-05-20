import React, { Component } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { green400, green600, blue400, blue600, red400, red600, black, grey800, green300, grey600, faintBlack } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import vr from './vr.jpg';
import vr1 from './vr1.jpg';
import vr2 from './vr2.jpg';
import vr3 from './vr3.png';


let defaultStyle = {
    height:"100%",
    width : "100%",
}


class Carousell extends Component{

  state = {
    toHome:true
  }
   
  getStarted = () =>{
      this.setState(()=>(
    {
      toHome:false
    }))
    console.log("get started button clicked");
  }
   
   
    render() {
        return(
    
        
            <div className="Carousell" >
              <MuiThemeProvider >
      <AutoRotatingCarousel  style={{...defaultStyle}}
        open={this.state.toHome}
        onStart={this.getStarted}
        label="Get started"
        // footerStyle={{
        //   height:"10%"
        // }}
        
      >
        <Slide 
          media={<img src={vr} />}
          mediaBackgroundStyle={{ backgroundColor: faintBlack}}
          contentStyle={{ backgroundColor:faintBlack }}
          title="This is the destination for matches in vr"
          subtitle="Only place for virtual reality experience."
        />
        <Slide
          media={<img src={vr1} />}
          mediaStyle={{height:"100%"}}
          mediaBackgroundStyle={{ backgroundColor:faintBlack }}
          contentStyle={{ backgroundColor:faintBlack }}
          title="Watch every sport"
          subtitle="Don't just watch but experience the matches"
        />
        <Slide
          media={<img src={vr2} />}
          mediaBackgroundStyle={{ backgroundColor: faintBlack }}
          contentStyle={{ backgroundColor: faintBlack }}
          title="Feel the stadium"
          subtitle="Watch at your stadium"
        />
        <Slide
          media={<img src={vr3} />}
          mediaBackgroundStyle={{ backgroundColor: faintBlack }}
          contentStyle={{ backgroundColor: faintBlack }}
          title="Subscribe and bring stadium at tour home"
          subtitle="Subscribe!"
        />
      </AutoRotatingCarousel>
      </MuiThemeProvider>
      </div>
      
   
  );
}
}       


export default Carousell;