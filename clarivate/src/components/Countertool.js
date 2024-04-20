import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { connect } from 'react-redux';
import { toggleSelectedId } from './Action';
const Countertool = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [albumdata, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const handleClick = (id) => {
    toggleSelectedId(id);
  };
  
  let p =1;
    localStorage.setItem('pg',p)
  const fetchData = async() =>{
                
                localStorage.setItem('pg',p)
                p++;
                let pgno = localStorage.getItem('pg')
    setScrollCount(prevCount => prevCount + 1);
    console.log('rana---------'+pgno)
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pgno}&_limit=10`);
  const newData = await response.json();
  setAlbum(prevData => [...prevData, ...newData]); // Append new data to existing data
  
       
    } catch (error){
        setError(error);
    } finally {
        setLoading(false);
      }
}   
useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial mount
  useEffect(() => {
    const handleScroll = () => {
      
      fetchData()
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Showing Your album List</h1>
      <p>Scroll count: {scrollCount}</p>
      <div style={{ height: '18000px', background: '#f0f0f0' }}>
      <DataTable data={albumdata} />

      </div>
    </div>
  );
};

export default Countertool;
