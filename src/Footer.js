import React,{ Component  } from 'react';
import Para from './Para.js';


let footerStyle = {
    height:"300px",
    width:"100%",
    // marginTop:"15px",
    marginBottom:"15px"
    
}

class Footer extends Component{
    render() {
        return(
            <div style={{footerStyle}} className="Footer" >
                <Para/>
                <Para/>
                <Para/>
            </div>
        );
    }
}


export default Footer;