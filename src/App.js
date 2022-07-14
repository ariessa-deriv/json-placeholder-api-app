import "./App.css";
import { useState, useEffect } from "react";
import commentService from "./services/comments";
import FormPost from "./components/Forms/FormPost";
import FormPut from "./components/Forms/FormPut";
import GetRequest from "./components/GetRequest";
import GetRequestByID from "./components/GetRequestById";
import FormDelete from "./components/Forms/FormDelete";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<GetRequest />}></Route>
          <Route exact path="/comments" element={<GetRequest />}></Route>
          <Route
            exact
            path="/single-comment"
            element={<GetRequestByID />}
          ></Route>
          <Route exact path="/add-comment" element={<FormPost />}></Route>
          <Route exact path="/edit-comment" element={<FormPut />}></Route>
          <Route exact path="/delete-comment" element={<FormDelete />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
