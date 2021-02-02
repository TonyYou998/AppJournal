import { combineReducers } from "redux";
import journalAppReducer from "../../modules/journalAppReducer";
import detailJournalReducer from "../../modules/detailJournalReducer";
import addJournalReducer from "../../modules/addJournalAppReducer";
const rootReducer = combineReducers({
  journalAppReducer,
  detailJournalReducer,
  addJournalReducer,
});

export default rootReducer;
