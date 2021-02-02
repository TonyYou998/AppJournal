import * as ActionType from "./constants";
import journalApi from "../api";

export const actDetailJournalApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailJournalRequest());
    journalApi
      .get(`/listJournal/${id}`)
      .then((result) => {
        dispatch(actDetailJournalSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailJournalFailed(err));
      });
  };
};
const actDetailJournalRequest = () => {
  return {
    type: ActionType.DETAIL_JOURNAL_REQUEST,
  };
};
const actDetailJournalSuccess = (data) => {
  return {
    type: ActionType.DETAIL_JOURNAL_SUCCESS,
    payload: data,
  };
};

const actDetailJournalFailed = (err) => {
  return {
    type: ActionType.DETAIL_JOURNAL_FAILED,
    payload: err,
  };
};
export const actListJournalApi = () => {
  return (dispatch) => {
    dispatch(actListJournalRequest());
    journalApi
      .get("/listJournal")
      .then((result) => {
        dispatch(actListJournalSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListJournalFailed(err));
      });
  };
};
const actListJournalRequest = () => {
  return {
    type: ActionType.LIST_JOURNAL_REQUEST,
  };
};
const actListJournalSuccess = (data) => {
  return {
    type: ActionType.LIST_JOURNAL_SUCCESS,
    payload: data,
  };
};

const actListJournalFailed = (err) => {
  return {
    type: ActionType.LIST_JOURNAL_FAILED,
    payload: err,
  };
};

export const actAddJournalApi = (journal) => {
  return (dispatch) => {
    dispatch(actAddJournalRequest());
    journalApi
      .post("/listJournal", journal)
      .then((result) => {
        dispatch(actAddJournalSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAddJournalFailed(err));
      });
  };
};
const actAddJournalRequest = () => {
  return {
    type: ActionType.LIST_JOURNAL_REQUEST,
  };
};
const actAddJournalSuccess = (data) => {
  return {
    type: ActionType.LIST_JOURNAL_SUCCESS,
    payload: data,
  };
};

const actAddJournalFailed = (err) => {
  return {
    type: ActionType.LIST_JOURNAL_FAILED,
    payload: err,
  };
};
