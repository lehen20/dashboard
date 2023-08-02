import logo from './logo.png';
import { useState } from 'react';
import './App.css';
import NavContainer from './components/NavContainer.js';
import CameraIm from './components/CameraIm.js';
import CanvasComponent from './CanvasComponent.js';
// import Nav from './Nav.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function App() {
//     return(
//       <div>
//         {Nav}
//       </div>
//     );    
// }


function App() {
  
// return(
  
  // <div> 
     
  //     <div class="info">
	// <p class="points-info">No points yet</p>
	// <input type="text" placeholder="Image URL"/>  */}
  // {/* </div>
  // <div class="output">
	// <Canvas/>
	// <div class="zoom"></div> */}
  // </div>
    return(
      <div> 
        <NavContainer/>
      {/* <CameraIm/> */}
        <CanvasComponent/>
      </div>
    )
  }
 
export default App;
