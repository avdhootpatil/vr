import React, { Component } from 'react';
import Header from "./Header.js";
import SideBar from "./Sidebar.js";
import Preview from "./Preview.js";
import Footer from './Footer.js';
import LargeImage from './LargeImage.js';
import Carousell from './carousel.js';
import Testcarousel from './Testcarousel.js';

class HomeContent extends Component{
    render() {
        return(
            <div>
                 {/* <Carousell/> */}
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