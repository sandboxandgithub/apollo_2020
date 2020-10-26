import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
  return (
    <HashRouter>
      <Route exact="exact" path="/"><Home /></Route>
      <Route exact="exact" path="/:id"><Detail /></Route>
    </HashRouter>
  );
}

export default App;
