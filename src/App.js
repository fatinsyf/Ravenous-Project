import './App.css';
import React, { Component } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* <!-- Add SearchBar component here --> */}
        <SearchBar />
        {/* <!-- Add BusinessList component here --> */}
        <BusinessList />
      </div>
    )
  }
}

export default App;
