import React, { Component } from 'react';



let defaultStyle={
    background:"lightGrey",
    minHeight:"200px" ,
    height:"auto",
    width: "100%",
    marginBottom:"15px"
}

class Subscribe extends Component{
    render() {
        return(
            <div className="PreviewBox" style={{background:"grey",
               height:"150px",width:"20%",
                       display:"inline-block",marginLeft:"15px",marginRight:"15px",
                       marginTop:"30px",marginBottom:"30px",borderRadius:"20px"}}> 
                <img style={{height:"150px",borderColor:"black"}} />
                <h2>Show Name</h2>
            </div>
        );
    }
}

export default Subscribe;