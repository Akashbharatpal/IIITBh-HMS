import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import './index.css';


function App() {
  return <>
    <div>
      <Header />
    </div>
  </>
};

ReactDom.render(<App />, document.getElementById('root'));
