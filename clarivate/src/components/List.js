import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import DataTable from './DataTable';
const baseURL = "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10";
function List(){
    const [albumdata, setAlbum] = React.useState([]);
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
   
    const fetchData = async() =>{
        console.log('rana')
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
      const newData = await response.json();
      setAlbum(prevData => [...prevData, ...newData]); // Append new data to existing data
      setPage(prevPage => prevPage + 1); // Increment page number
           
        } catch (error){
            setError(error);
        } finally {
            setLoading(false);
          }
    }   
    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          // User has scrolled to the bottom
          fetchData();
        }
      };
      
  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial mount

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [albumdata]); // Add/remove scroll event listener based on data changes
    
     return(
        <> 
            
            
      <h1>Album List Items</h1>
      
      <div style={{ height: '3000px', background: '#f0f0f0' }}>
      <DataTable data={albumdata} />
        </div>
             
             {loading && <p>loading...</p>}
            {error && <p>Error: {error.message}</p>}
        
    
        </>
     )
}
export default List;