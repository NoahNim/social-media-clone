import React from "react";
import About from "./About";

function Profile(){
  var profileStyle = {
    padding: '15px 15px 15px 15px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '12px'
  }
  var profilePic = {
    textAlign: 'center',
  }
  var profileDivStyle = {
    width: '30%',
    float: 'left'
  }
  var nameStyle = {
    textAlign: 'center'
  }
  return(
    <div style={profileDivStyle}>
      <div style={profilePic}>(Picture)</div>
      <h3 style={nameStyle}>(Name)</h3>
      <div>
      <h3 style={profileStyle}>TWEETS</h3>
      <h3 style={profileStyle}>FOLLOWING</h3>
      <h3 style={profileStyle}>FOLLOWERS</h3>
      </div>
      <About/>
    </div>
  )
}

export default Profile;
