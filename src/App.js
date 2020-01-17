import React from 'react';
import { Header } from './components/Header';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
