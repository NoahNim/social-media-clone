import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import Feed from "./Feed";
import Suggested from "./Suggested";

function App(){
  return(
    <div>
      <Header/>
      <Profile/>
      <Feed/>
      <Suggested/>
    </div>
  );
}

export default App;
