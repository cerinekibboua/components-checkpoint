import React, { Component } from 'react';
import Profilephoto from './pfp.png'
const image={
    textAlign:"center"
}
class Profilepic extends Component {
state = {  }
    
    render() { 
        return ( 
            <div style={image}>
                <img className="image" src = {Profilephoto}></img>
            </div>
        );
    }
}
 
export default  Profilepic  ;
 