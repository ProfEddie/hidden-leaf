import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home"

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      
      <Home />
    </div>
  );
}

export default App;
