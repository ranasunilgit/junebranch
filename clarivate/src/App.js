import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js';
import List from './components/List.js'
import Scrool from './components/Scrool.js';
import Countertool from './components/Countertool.js';
import Scrollpage from './components/Scrollpage.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound.js'
import Header from './components/Header.js';
import Counter from './components/Counter.js';
import ComponentB from './components/ComponentB.js';
import ComponentA from './components/ComponentA.js';


const Wrapper = ({ children }) => children;
debugger;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="create" element={<Creation user={account} />} /> */}
              <Route path="/list/*" element={<Countertool />} />
              <Route path="/selected" element={<ComponentB />} /> 
              <Route path="/getselect" element={<ComponentA />} /> 
              
              <Route path="/home" element={<Counter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
