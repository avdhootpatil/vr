
import React,{ Component  } from 'react';
import Preview from "./Preview.js";


let defaultStyle={
    background:"lightGrey",
    minHeight:"200px" ,
    height:"auto",
    width: "100%",
    marginBottom:"15px"
}

class Play extends Component{
    render() {
        return(
            <div className="Play" style={{...defaultStyle}}>
                <h2 style={{marginTop:"20px",marginBottom:"15px"}} >Recommendation</h2>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
            </div>
        ) ;
    }
} 


export default Play;