import React from 'react';
import './App.css';
import Generate from './Generate';

function App() {
  
  return (
    <>
    <h1>WORD GAME</h1>
    <div className="App">
      <div class="rules">
        <ol>
        <li>Fixed Length=4</li>
        <li>Only Alphabets</li>
        <li>No repeated words</li>
        <li>No of chances 10</li>
        </ol>
        
      </div>
      
      <div class="process">
      
      {(() => {
        
        let rows = [];
        for (let i = 0; i < 10; i++) {
          rows.push(<Generate no={i} display={i===0 ? "inline" : "none"}/>);
        }
        return rows;
      })()}
      </div>
    </div>
    </>
  );
}

export default App;
