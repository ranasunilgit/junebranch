import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
const Scrool = () => {
  const [albumdata, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial mount

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [albumdata]); // Add/remove scroll event listener based on data changes

  const fetchData = async () => {
    console.log(page)
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
      const newData = await response.json();
      setData(prevData => [...prevData, ...newData]); // Append new data to existing data
      setPage(prevPage => prevPage + 1); // Increment page number
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom
      fetchData();
    }
  };

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      
      <div style={{ height: '3000px', background: '#f0f0f0' }}>
      <DataTable data={albumdata} />
        </div>
             
             {loading && <p>loading...</p>}
            {error && <p>Error: {error.message}</p>}
        
    </div>
  );
};

export default Scrool;
