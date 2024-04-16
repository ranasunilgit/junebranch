import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * https://stackoverflow.com/questions/71885505/react-router-v6-no-routes-matched-location
 */
import Home from './views/Home';
import Order from './views/Order.js';
import Help from './views/Help.js';
import Market from './views/Market.js';
import NotFound from './views/NotFound.js'
import Event from './views/Event.js'
import Header from './Header.js';
import Parcel from './views/Parcel.js';
import Profile from './views/Profile.js';
import Register from './views/Register.js';
import Item from './views/Items.js'




//const Header = ({ children }) => children;
const Wrapper = ({ children }) => children;

const styles = {};


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="create" element={<Creation user={account} />} /> */}
              <Route path="/orders/*" element={<Order />} />
              <Route path="/events" element={<Event />} />
              <Route path="/markets" element={<Market />} />
              <Route path="/support" element={<Help />} />
              <Route path="/parcel" element={<Parcel />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/items" element={<Item />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        
      </BrowserRouter>
    </div>
  );
}
