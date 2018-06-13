import React, { Component } from 'react';
import Preview from './Preview';

let categorieStyle ={
    root:{
        background:"black",
        height:"400px",
        width:"100%",
        marginTop:"20px",
        marginBottom:"20px"
    },
    categorieHeader:{
        color:"white",
        paddingTop:"10px",
        paddingBottom:"10px"
    },
    row : {
        marginBottom : "20px",
        marginTop : "20px",
        background : "#000033",
        height : "300px",
        width : "100%"
    }
}

let fakeCategories={
   type:{
        name:"sports",
        types:[
            {
                name:"cricket"
            },
            {
                name:"football"
            },
            {
                name:"kabbadi"
            }
        ]
    }
}

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {data : {fakeCategories}};
      }
    
  
    render() {
      return (
          <div  >  
          {/* {this.state.data.type ?  
          <div>
                <h1 style={categorieStyle.categorieHeader} >
                {this.state.data.type.name}
                </h1>
                {
                    this.state.data.type.types.map(
                        types => <Preview/>
                    )
                }
                 <div style= {categorieStyle.root} ></div>
                </div>:<h1>Loading...</h1>
            }  */}
            <div style={categorieStyle.row} > 
              
            </div>
            <div style={categorieStyle.row} > 
                
            </div>
            <div style={categorieStyle.row} > 
                
            </div>
          </div>
      );
    }
}

export default Categories;