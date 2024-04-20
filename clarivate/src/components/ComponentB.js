// ComponentB.js
import React from 'react';
import { connect } from 'react-redux';

const ComponentB = ({ selectedIds }) => {
  return (
    <div>
      <h2>Selected IDs:</h2>
      <div id="subsdiv">
        {selectedIds.map((id) => (
          <div className='text-primary' key={id}>You subscribed to:{id}</div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedIds: state.selectedIds,
});

export default connect(mapStateToProps)(ComponentB);
