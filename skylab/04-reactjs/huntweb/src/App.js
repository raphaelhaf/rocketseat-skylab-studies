import React from 'react';
import Routes from './routes';

import "./styles.css";

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
  <Header/>
  <Routes path="/" component={Main} />
</div>
)
export default App;
