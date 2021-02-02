import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actAddJournalApi } from "../../modules/action";

const NewJournalForm = (props) => {
  let [state, setState] = useState({
    name: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      // đoạn này lụm stackoverflow và i do not understand , so don't make a question
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchAddJournal(state);
  };

  return (
    <div>
      <div className="new-journal-wrapper">
        <h2>New Journal</h2>

        <form className="new-journal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              className="title-input-field"
              placeholder="Journal Title"
              name="name"
              onChange={handleOnChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              className="description-input-field"
              rows="10"
              cols="50"
              placeholder="Journal Description"
              name="description"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="button-save-journal">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    err: state.addJournalReducer.err,
    // data: state.addJournalReducer.data,
  };
  // console.log(state);
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAddJournal: (journal) => {
      dispatch(actAddJournalApi(journal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewJournalForm);
