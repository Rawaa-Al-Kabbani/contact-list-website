import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import ListOfcontacts from './components/ListOfcontacts';
import ContactDetails from './components/ContactDetails';

function App(props) {
  const [users, setUsers] = useState([]);
  const history = createHistory({ forceRefresh: true });

  const fetchUsers = async () => {
    await fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers();
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <ListOfcontacts users={users} />
          </Route>
          <Route exact path="/contactDetails">
            <ContactDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
