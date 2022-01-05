import React, { Suspense } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
const RemoteApp2 = React.lazy(() => import("app2/App"));
const RemoteApp3 = React.lazy(() => import("app3/App"));

const Home = () => (
  <div
    style={{
      margin: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "blue",
    }}
  >
    <h1>App 1 content</h1>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <div>
        <div
          style={{
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "greenyellow",
          }}
        >
          <h1>App1-header</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to='/'>App1</Link> | <Link to='/app2'>App2</Link> |{" "}
            <Link to='/app3'>App3</Link>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/app2'
              exact={false}
              strict={false}
              element={
                <Suspense fallback='loading'>
                  <RemoteApp2 />
                </Suspense>
              }
            />
            <Route
              path='/app3'
              exact={false}
              strict={false}
              element={
                <Suspense fallback='loading'>
                  <RemoteApp3 />
                </Suspense>
              }
            />
          </Routes>
        </div>
        {/* <Suspense fallback={"loading..."}>
          <RemoteApp />
        </Suspense> */}
      </div>
    </HashRouter>
  );
};

export default App;
