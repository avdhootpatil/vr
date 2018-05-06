import React, { Component } from 'react';
import ReactTransitions from 'react-transitions';
import logo from './download.jpg';
import Carousel from 're-carousel';
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'

let carstyles = {
    width:"100%",
    height:"auto",
    minHeight:"400px",
    background:"black",
    paddingTop:"0px",
    paddingBottom:"0px"
}

class Testcarousel extends Component{
    render() {
        return(
            <div style={carstyles} >
           

                       
  <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
    <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
    <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
    <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
  </Carousel>
 
            </div>
        );
    }
 }


 export default Testcarousel;

