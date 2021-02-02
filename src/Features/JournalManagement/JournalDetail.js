import React from "react";
import { useEffect } from "react";

import { actDetailJournalApi } from "../../modules/action";
import { connect } from "react-redux";
const JournalDetail = (props) => {
  const { id, data } = props;
  useEffect(() => {
    props.fetchDetailJournal(id);
  }, [id]);

  return (
    <div>
      <div className="journal-detail-wrapper">
        <div className="journal-detail-form">
          <div className="form-group">
            <label>Title</label>
            {/* <div>{data && data.name}</div> */}
            <br />
            <input
              className="title-input-field"
              placeholder={data && data.name}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              className="description-input-field"
              rows="10"
              placeholder={data && data.description}
            ></textarea>
          </div>
          <div>
            <button className="button-save-journal">Save</button>
            <button className="button-save-journal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.detailJournalReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailJournal: (id) => {
      dispatch(actDetailJournalApi(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JournalDetail);
// export default JournalDetail;
