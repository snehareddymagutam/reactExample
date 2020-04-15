import React from 'react';
import Search from './components/Search.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Books Example App</h2>
      </header>
      <main>
       <Search />
     </main>
    </div>
  );
}

export default App;
