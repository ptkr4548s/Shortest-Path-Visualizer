import React, { useState } from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Page1 from './PathfindingVisualizer/Page1';
import Path2 from './PathfindingVisualizer/Path2';


function App() {
  const [isgameplay,SetIsgameplay]=useState(false);
 
  const toogleplay=(p)=>{
   SetIsgameplay((prev)=>!prev);
  }

  return (
    <div className="App">
      
      {isgameplay? <Path2/> : <Page1 toogle={toogleplay}/> }
 </div>
  );
}

export default App;
