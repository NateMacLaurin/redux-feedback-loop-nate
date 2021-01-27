import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from "../Feeling/Feeling.jsx";
import Support from "../Support/Support.jsx";
import Understanding from "../Understanding/Understanding.jsx"
import Comment from "../Comment/Comment.jsx";
import Review from "../Review/Review.jsx";
import Admin from "../Admin/Admin.jsx";
import Success from "../Success/Success.jsx";

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/" exact component={Feeling} />
      <Route path="/1" component={Feeling} />
      <Route path="/2" component={Understanding} />
      <Route path="/3" component={Support} />
      <Route path="/4" component={Comment} />
      <Route path="/review" component={Review} />
      <Route path="/success" component={Success} />
      <Route path="/admin" component={Admin} />
    </div>
    </Router>
  );
}

export default App;
