import * as ActionType from "./constants";
const initialState = {
  data: null,
  err: null,
};

const addJournalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_JOURNAL_REQUEST:
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.ADD_JOURNAL_SUCCESS:
      state.data = action.payload;
      state.err = false;
      return { ...state };
    case ActionType.ADD_JOURNAL_FAILED:
      state.data = false;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default addJournalReducer;
