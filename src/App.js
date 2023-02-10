import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=>{
  const apiKey=process.env.REACT_APP_NEWS_KEY
  const pageSize=10; 

  const[progress,setProgress]=useState(0)

  const changeProgress=((progress)=>{
    setProgress(progress)
  })

    return (
      <div>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key={"general"}
                setProgress={changeProgress}
                pageSize={pageSize}
                country={"us"}
                title="Home Page"
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key={"business"}
                setProgress={changeProgress}
                pageSize={pageSize}
                country={"us"}
                title="Business News"
                category={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={changeProgress}
                key={"entertainment"}
                pageSize={pageSize}
                country={"us"}
                title="Entertainment News"
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={changeProgress}
                key={"health"}
                pageSize={pageSize}
                country={"us"}
                title="Health News"
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={changeProgress}
                key={"science"}
                pageSize={pageSize}
                country={"us"}
                title="Science News"
                category={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={changeProgress}
                key={"sports"}
                pageSize={pageSize}
                country={"us"}
                title="Sports News"
                category={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={changeProgress}
                key={"technology"}
                pageSize={pageSize}
                country={"us"}
                title="Technology News"
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }

  export default App;