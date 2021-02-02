import React, { useEffect } from "react";
import JournalDetail from "./JournalDetail";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actListJournalApi } from "../../modules/action";
import { connect } from "react-redux";

const JournalList = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.fetchListJournal();
  }, []);

  const renderListJournal = () => {
    const { data } = props;
    if (data && data.length > 0)
      return data.map((item, index) => {
        return (
          <Link
            to={`/my-journal/${item.id}`}
            className="list-group-item  "
            style={{ margin: "0 auto", width: "90%", cursor: "pointer" }}
          >
            {item.name}
          </Link>
        );
      });
  };

  return (
    <div>
      <div className="journal-list-wrapper">
        <header>
          <div className="subTitle">Your entries</div>
          <div className="subTitle">Detail</div>
        </header>
      </div>
      <div className="journal-list-main-area">
        <div className="journal-list">
          <ul className="container pt-4 list-group">
            <div> {renderListJournal()}</div>
          </ul>
        </div>
        <div className="journal-detail">
          <JournalDetail id={id} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.journalAppReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListJournal: () => {
      dispatch(actListJournalApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JournalList);
