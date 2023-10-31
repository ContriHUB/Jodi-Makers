import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useCookies} from "react-cookie";

import "./App.css";
import React, {useState} from "react";
import logo from "./Jodi-Makers.png";
import {useSpring, animated} from "react-spring";
const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])



    const authToken = cookies.AuthToken

    
    const [flip, setFlip] = useState(false);
    const props = usespring({
      to: { opacity: 1},
      from: { opacity: 0},
      reset: true,
      reverse: flip,
      delay: 200,
      onRest: () =>setFlip(!flip),

    });


//   return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//             {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
//             {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}
//         </Routes>
//       </BrowserRouter>
//   )
// }
return (
  <div className="App">
    <header className="App-header">
      <animated.div style={props}>
        <img src={logo} className="App-logo" alt="logo"/>
      </animated.div>
    </header>
  </div>
)
}

export default App;
