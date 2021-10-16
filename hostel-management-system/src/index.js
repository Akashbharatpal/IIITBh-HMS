import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Calendar from './calendar';
import './index.css';


function App() {
  return <React.Fragment>
    <div>
      <Header />
      <Calendar />
    </div>
  </React.Fragment>
};

ReactDom.render(<App />, document.getElementById('root'));
