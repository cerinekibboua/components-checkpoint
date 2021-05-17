// import logo from './logo.svg';
import { Profiler } from 'react';
import './App.css';
import Profilepic from './components/Profile/Profilephoto'
import Fullname from './components/Profile/Fullname'
import Adress from './components/Profile/Adress'
// import fullName from './profile/components/fullName'
// import bio from './profile/components/bio'
// import Profile from './profile/components/Profile'

function App(){

    return(
        <div>
            <Profilepic>
            </Profilepic>
            <Fullname>
            </Fullname>
            <Adress></Adress>
        </div>
    );
}

// function App() {
//   return (
//     <div>
//     <Profile
//       Fullname="cerine kibboua"
//       bio= "kokdokdekdoe"
//       Profession="none"
//       handleAlert = ""
//     >
//     <img src={ Image} alt="img"/>
//     </Profile>
//     </div>
//   );
// }
export default App;