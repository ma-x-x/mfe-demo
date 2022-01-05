import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// vercel 静态页面部署，修改路由为hashRouter 方式。

const App = () => {
  return (
    <HashRouter basename='app2'>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "cyan",
        }}
      >
        <h1>App 2 content</h1>
        <div>
          <Link to='/'>App2</Link> | <Link to='/child1'>App2-child1</Link> |
          <Link to='/child2'>App2-child2</Link>
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
            <Route path='/' element={<div>App2-content</div>} />
            <Route path='/child1' element={<div>App2-child1-content</div>} />
            <Route path='/child2' element={<div>App2-child2-content</div>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
