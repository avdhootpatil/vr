import React, { Component } from 'react';

class LargeImage extends Component{
    render() {
        return(
          <div style={{height:"300px",width:"100%",
                       marginTop:"15px"}}  className="LargeImage"  >
            <img/>
          </div>
        );
    }
  }

  export default LargeImage;