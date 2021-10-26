import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Calendar from './calendar';
import './index.css';
import HostelCard from './hostelCard';
import hostelData from './data-json-file/hostel.json'
import { HostelInfo, Students, Employee, Equipment } from './hostelInfo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const Item = Object.keys(hostelData).map((item) => hostelData[item].hostelName);

  return <React.Fragment>
    <BrowserRouter>
      <div style={{ position: "absolute", width: '100%', height: "100%" }}>
        <Switch>
          <Route exact path="/" render={() => <><Header /><HostelCard /></>} />
          {
            Item.map((item, index) => {
              return <Route key={index} exact path={`/hostel-info/students/${item}`} render={() => <><HostelInfo hostel={item} /><Students hostel={item} /></>} />
            })
          }
          {
            Item.map((item, index) => {
              return <Route key={index} exact path={`/hostel-info/equipment/${item}`} render={() => <><HostelInfo hostel={item} /><Equipment hostel={item} /> </>} />
            })
          }
          {
            Item.map((item, index) => {
              return <Route key={index} exact path={`/hostel-info/employee/${item}`} render={() => <><HostelInfo hostel={item} /><Employee hostel={item} /> </>} />
            })
          }
        </Switch>
      </div>
      <Calendar />
    </BrowserRouter>
  </React.Fragment>
};

ReactDom.render(<App />, document.getElementById('root'));
