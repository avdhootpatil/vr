import React, { Component } from 'react';
import Preview from "./Preview.js";
import LargeImage from './LargeImage.js';
import Testcarousel from './Testcarousel.js';
import Carousell from './carousel.js';

class HomeContent extends Component{

   
    render() {
        let openedOnce =false;
        return(
            <div>
                 <Carousell openedOnce = {true} />
                 <Testcarousel/>
                 <Preview/>
                  <Preview/>
                  <Preview/>
                  <Preview/>
                  <LargeImage/>
                 
            </div>
        );
    }
}
export default HomeContent;