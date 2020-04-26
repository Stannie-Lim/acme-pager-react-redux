import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Redirect } from 'react-router-dom';

//components 
import Nav from './Nav';
import List from './List';

//thunks
import { loadEmployees, loadEmployeesCount } from '../store/store';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEmployeesCount());
    dispatch(loadEmployees());
  }, []);

  return (
    <HashRouter>
          <h1>ACME Pager</h1>
          <Route exact path='/' render={ () =>  <Redirect to='/0' /> } />
          <Route exact path='/:num' component={ List } />
          <Route path='/' render={ props => <Nav { ...props } /> } />
    </HashRouter>
  );
};
  
export default App;