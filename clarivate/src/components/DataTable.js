import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedId } from './Action';
import Button from 'react-bootstrap/Button';
const DataTable = ({ data,selectedIds, toggleSelectedId }) => {
    const handleClick = (id) => {
        toggleSelectedId(id);
      };
  return (
    <table>
      <thead>
        <tr>
          <th>AlBUM ID</th>
          <th>Title</th>
          
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><img src={item.thumbnailUrl}></img></td>
            <td>
            <Button variant={selectedIds.includes(item.id) ? "primary" : "danger" } 
            onClick={() => handleClick(item.id)}>{selectedIds.includes(item.id) ? "Subscribed" : "Unsubscribe" } </Button>{' '}
                
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const mapStateToProps = (state) => ({
    selectedIds: state.selectedIds,
  });
  
  export default connect(mapStateToProps, { toggleSelectedId })(DataTable);