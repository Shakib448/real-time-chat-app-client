import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};

export default App;
