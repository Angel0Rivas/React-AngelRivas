import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/:id" component={ItemListContainer} />
      <Route exact path="/item/:id" component={ItemDetail} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);