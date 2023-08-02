import logo from '.././logo.png';
import { useState } from 'react';
import '.././App.css';



function NavContainer() {
    const [cameraID, setCameraID] = useState('');
    return (

  
  <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="Logo" />
       <div className="cameraID"> 
       <input
      type="numeric"
      placeholder="Camera ID"
      // data-testid="email-input"
      value={cameraID}
      onChange={e => setCameraID(e.target.value)}
    />
       </div>
       </header>
       </div> 

    );
}

export default NavContainer;

