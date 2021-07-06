import React from 'react';
import './app.css';
import Header from "./Header";

const App = () => (
  <div className="wrapper">
    <div className="menu-summary" data-testid="header">
      <Header />
    </div>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4" data-testid="itemNavigationPanel">
          <div className="filters">
            <input className="form-control" placeholder="Name" />
          </div>
          <ul className="item-picker">
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-8" data-testid="itemPreviewPanel">
          <h2>Menu preview</h2>
          <ul className="menu-preview">
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="dietary">ve</span>
                <span className="dietary">v</span>
                <span className="dietary">n!</span>
              </p>
              <button className="remove-item">x</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default App;