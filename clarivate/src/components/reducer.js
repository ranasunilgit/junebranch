// reducer.js
import { INCREMENT, DECREMENT,TOGGLE_SELECTED_ID  } from './Action';

const initialState = {
  count: 0,
  selectedIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED_ID:
      const { payload: id } = action;
      const index = state.selectedIds.indexOf(id);
      if (index === -1) {
        return {
          ...state,
          selectedIds: [...state.selectedIds, id],
        };
      } else {
        return {
          ...state,
          selectedIds: state.selectedIds.filter((selectedId) => selectedId !== id),
        };
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
