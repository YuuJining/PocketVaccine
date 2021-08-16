import React from "react";
import "./App.css";
import TabMenu from "./global/TabMenu";
import Header from "./global/Header";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import WriteReviewBtn from "./global/WriteReviewBtn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TabMenu />
        <Router />
        <WriteReviewBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
