// ComponentA.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedId } from './Action';

const ComponentA = ({ selectedIds, toggleSelectedId }) => {
  const handleClick = (id) => {
    toggleSelectedId(id);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>
        {selectedIds.includes(1) ? 'Deselect ID 1' : 'Select ID 1'}
      </button>
      <button onClick={() => handleClick(2)}>
        {selectedIds.includes(2) ? 'Deselect ID 2' : 'Select ID 2'}
      </button>
      <button onClick={() => handleClick(3)}>
        {selectedIds.includes(3) ? 'Deselect ID 3' : 'Select ID 3'}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedIds: state.selectedIds,
});

export default connect(mapStateToProps, { toggleSelectedId })(ComponentA);
