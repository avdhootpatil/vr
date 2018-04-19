import React, { Component } from 'react';



let inputStyle = {
     marginTop:"80px",
     marginBottom:"80px",
     height:"40px",
     width:"50%",
     borderRadius:"10px",
     outline:"0",
     fontSize:"30px"
}

class Header extends Component{
    render() {
      return(
        <div className="header" >
            <img className="header-image" />
            <input style={{...inputStyle}} type="text"/>
        </div>
      );
    }
  }

export default Header;