// import React, { Children, Component, useState } from 'react';
// import PropTypes from 'prop-types'; 
// import Profilephoto from './pfp.png'
// import React, { useState } from 'react';
// const ProfileComponent =({Fullname,bio,Profession,children}) =>{
//   const styleProfile = {
//     display:'flex' , color:'grey'
//   }
// const handleAlert = e => {
//   handleAlert(Fullname);
// }
//   return(
//     <div style={styleProfile}>
//      <div>
//      <div>{children}</div>
//      <div> <button onClick={handleAlert}> click</button></div>
//      </div>
//      <div>
//      <div>{Fullname}</div>
//      <div>{bio}</div>
//      <div>{Profession}</div>
//      </div>
//     </div>
//   )
// }
// ProfileComponent.PropTypes = {
//   Fullname : PropTypes.string,
//   Bio :PropTypes.string,
//   Profession :PropTypes.string,
// };
// ProfileComponent.defaultprops = {
//   Fullname : 'cerine kibboua',
//   bio :'kokdokdekdoe',
//   Profession :'none',
// };
// ________________________________________________________________________
// const Timer ={hours, minutes, seconds}
// class Content extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       hours: 0,
//       minutes: 0,
//       seconds:0,
//      };
//      this.hoursInput = React.createRef();
//      this.minutesInput= React.createRef();
//      this.secondsInput = React.createRef();
//   }
//   convertToSeconds = ( hours, minutes,seconds) => {
//     return seconds + minutes * 60 + hours * 60 * 60;
//   }

//   startTimer = () => {
//     this.timer = setInterval(this.countDown, 1000);
//   }

//   countDown = () => {
//     const  { hours, minutes, seconds } = this.state;
//     let c_seconds = this.convertToSeconds(hours, minutes, seconds);

//     if(c_seconds) {
//       seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});
//       if(c_seconds % 60 === 0 && minutes) {
//         this.setState({minutes: minutes -1});
//       }
//       if(!minutes && hours) {
//         this.setState({minutes: 59});
//       }
//       if(c_seconds % 3600 === 0 && hours) {
//         this.setState({hours: hours-1});
//       }
//     } else {
//       clearInterval(this.timer);
//     }
//   }


//   stopTimer = () => {
//     clearInterval(this.timer);
//   }

//   resetTimer = () => {
//     this.setState({
//       hours: 0,
//       minutes: 0,
//       seconds: 0
//     });
//     this.hoursInput.current.value = 0;
//     this.minutesInput.current.value = 0;
//     this.secondsInput.current.value = 0;
//   }

//   render() { 
//     return ( 
//       <div className="App">
//          <h1 className="title"> React Countdown </h1>
//          <div className="inputGroup">
//             <h3>hours</h3>
//             <div ref={this.hoursInput} type="number"  name="hours" ></div>  
//             <h3>minutes</h3>
//             <div  ref={this.minutesInput} type="number"  name="minutes"   ></div>
//             <h3>secondes</h3>
//             <div ref={this.secondsInput} type="number"  name="seconds"  ></div>
//          </div>
//          <div>
//             <button onClick={this.startTimer} className="start">start</button>
//             <button onClick={this.stopTimer} className="stop">stop</button>
//             <button onClick={this.resetTimer}  className="reset">reset</button>
//          </div>
//          {/* <h1> Timer {hours}: {minutes} : {seconds} </h1> */}
//       </div>

//      );
//   }
// }
//  _____________________________________________________________________________________
// checkpoint
// const content={
//      boxShadow:' 10px 10px 8px 10px #888888' , marginLeft:'300px' , marginRight:'300px' 
// }
// const Name={
//   marginLeft:'100px' ,  marginTop:'100px'
// }
// const Adress={
//   marginLeft:'100px'
// }
// const profession={
//   marginLeft:'100px'
// }
//  const profilePic={
//   marginLeft:'100px'

// }
// const button={
//   marginLeft:'100px'  , marginBottom:'30px'
// }
// class Person extends Component {
//   state = { 
//   }
      
//       render() { 
//           return ( 
//               <div style={content}>


//                 <div style={Name}>
//                    <h3>Cerine Kibboua</h3>
//                 </div>
                   

//                 <div style={Adress}>
//                    <h3>somewhere</h3>
//                 </div>


//                 <div style={profession}>
//                   <h3>none</h3>
//                 </div>


//                 <div style={button}>
//                    <button>show</button>
//                 </div>


//                 <div style={profilePic}>
//                    <img  className="image" src = {Profilephoto}></img>
//                 </div>


//               </div>
//           );
//       }
//   }
   
//   export default Person ;
// // export default ProfileComponent;
// ______________________________________________________________________________
// function exo() {
//   const [state ,setstate] = useState({count :0});

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//       </button>
//       <button onClick={() => setCount(count -1)}>
//       </button>
//     </div>
//   );
// }
// export default exo;