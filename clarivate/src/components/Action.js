// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE_SELECTED_ID = 'TOGGLE_SELECTED_ID';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
export const toggleSelectedId = (id) => ({
    type: TOGGLE_SELECTED_ID,
    payload: id,
  });
