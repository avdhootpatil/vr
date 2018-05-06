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
import SideBar from "./Sidebar.js";
import Header from "./Header.js";
import Subscribe from './Subscribe.js';
import Footer from './Footer.js';
import Carousel from './carousel.js';
import HomeContent from './Homecontent.js';
import Categories from './Categories';


// class App extends Component {
//   handleToggle = () => {===
//     const el = findDOMNode(this.refs.toggle);
//     $(el).slideToggle();
//   }
//   render() {
//     return (
//       <div className="App">
//         <header>
//              <div ref = "toggle" >
//                   <p>This is jquery testing in react</p>
//              </div>
//               <button onClick = {this.handleToggle}>test test test</button>
//         </header>
//       </div>
//     );
//   }
// }



class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App" >
                 <Header/>
                  <SideBar/>
                
          <div >
                  
                  <Switch>
                      <Route path='/play' component={Play} exact/>
                      <Route path='/' component={HomeContent} exact />
                      <Route path='/subscribed' component={Subscribe} exact/>
                      <Route path='/categories' component={Categories} exact/>
                    </Switch>
                  
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}



export default App;
