import React, { Component } from 'react';
import $ from 'jquery';
import { Router,Route } from "react-router";
import { findDOMNode } from 'react-dom';
import Ionicon from 'react-ionicons';
import logo from './logo.svg';
import './App.css';
import play from './Play.js';

class Preview extends Component{
    render() {
      return(
          <div className="PreviewBox" style={{background:"grey",
               height:"150px",width:"20%",
                       display:"inline-block",marginLeft:"15px",marginRight:"15px",
                       marginTop:"30px",marginBottom:"30px",borderRadius:"20px"}}> 
             <img style={{height:"150px",borderColor:"black"}} />
             <p><strong> akdg sdkusdkgs dksdg skdgs dysgf sjhgdsjhdjs dsjhdj 
                 sjhgdsjhdjsasdks ksdjg s</strong></p>
          </div> 
          
      );
    }
  }

  export default Preview;