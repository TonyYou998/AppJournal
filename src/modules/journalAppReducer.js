// import data from "../data.json";
import * as ActionType from "./constants";
const initialState = {
  data: null,
  err: null,
};

const journalAppReducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case ActionType.LIST_JOURNAL_REQUEST:
      // console.log("run");
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_JOURNAL_SUCCESS:
      state.data = action.payload;
      state.err = false;
      return { ...state };
    case ActionType.LIST_JOURNAL_FAILED:
      state.data = false;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default journalAppReducer;
