import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename='app3'>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        <h1>App 3 content</h1>
        <div>
          <Link to='/'>App3</Link> | <Link to='/child1'>App3-child1</Link> |
          <Link to='/child2'>App3-child2</Link>
        </div>
        <div
          style={{
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#EDA30F",
          }}
        >
          <Routes>
            <Route path='/' element={<div>App3-content</div>} />
            <Route path='/child1' element={<div>App3-child1-content</div>} />
            <Route path='/child2' element={<div>App3-child2-content</div>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
