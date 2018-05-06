import React, { Component } from 'react';
import $ from 'jquery';
// import { Router,Route } from "react-router";
import { findDOMNode } from 'react-dom';
import Ionicon from 'react-ionicons';
import logo from './logo.svg';
import './App.css';
import Play from './Play.js';
import Preview from "./Preview.js";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Switch from 'react-router/Switch';
import ToggleButton from './ToggleButton.js'



class SideBar extends Component{

    handleToggle =() =>{
      const sidebarr = findDOMNode(this.refs.toggle);
      const btn = findDOMNode(this.refs.btn);
      $(btn).toggleClass('Btnc');
      $(sidebarr).toggleClass('Side');
    }
  
    render() {
      return(
        <div>
        <div ref ="toggle"  onMouseLeave={this.handleToggle} className = "SideBar">
                 <ul>
  
                    <li><Link to='/qwer'  >name</Link></li>
                    <li><Link to='/'  >Home</Link></li>
                    <li><Link to='/play' >Favourites</Link></li>
                    <li><Link to='/subscribed' >Subscribed</Link></li>
                    <li><Link to='/qwew'>Liked </Link></li>
                    <li><Link to='/categories'>Categories</Link></li>
                    <li><Link to='/qwe'>About us</Link></li>
                    <li><Link to='/wqe'>Contact</Link></li>
                 </ul>
        </div>
                      <button ref="btn" className = "Btn" onMouseEnter = {this.handleToggle}>
                        <ToggleButton style={{paddingBottom:"200px"}} />
                      </button> 
        </div>
      );
    }
  }



  export default SideBar;