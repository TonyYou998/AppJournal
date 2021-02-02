import React from "react";
import "./styles.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="TitleArea">
          <h1>Mini Journal App</h1>
        </div>

        <div className="option-area">
          <Link className="tab" to="/my-journal">
            All entries
          </Link>
          <Link className="tab" to="/new-journal">
            New journal
          </Link>
        </div>

        <div className="MainArea">
          <Switch>
            <Route exact path="/" component={JournalList} />
            <Route exact path="/my-journal" component={JournalList} />
            <Route path="/my-journal/:id" component={JournalList} />
            <Route path="/new-journal" component={NewJournalForm} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
