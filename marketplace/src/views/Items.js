import React from 'react';

function Item() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const states = [{name:'Noida',code:201301},{name:'Delhi',code:110066}]
    const itemsArr = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ];
  return (
    <div>
      <h2>List Item</h2>
      <p>Welcome to our Items page!</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      -----
      <ul>
      <ul>
        {states.map(item => (
          <li key={item.code}>{item.name}</li>
        ))}
      </ul>
      </ul>
      +++++++
    </div>
  );
}

export default Item;