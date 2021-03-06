import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchMovies from "./SearchMovies";

class Main extends React.Component {
    render() {
        return (
          <div className="container">
              <h1 className="title">React Movie search</h1>
              <SearchMovies></SearchMovies>
          </div>

        );
    }

}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
