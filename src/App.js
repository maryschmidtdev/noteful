import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../src/Header/Header'
import Note from '../src/Note/Note'
import MainPage from '../src/MainPage/MainPage'
import Folder from '../src/Folder/Folder'

class App extends React.Component {
  state = {
    notes: [],
    folers: []
}
  render() {
  return (
    <div className="App">
      <Header />
      
        <Switch>
      <Route path='/note' component={Note} />
      <Route exact path='/' component={MainPage} />
      <Route path='/folder' component={Folder} />
      </Switch>
      
    </div>
  );
}
}
export default App;
