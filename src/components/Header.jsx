import React from "react";

function Header(){
  var headerButton = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 32px 15px 32px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px'
  }
  var searchStyle = {
    width: '50%',
    borderRadius: '15px',
    border: '1px #000 solid',
    marginTop: '35px',
    padding: '5px 5px 5px 25p',
  }
  var tweetStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 32px 15px 32px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    marginTop: '35px',
  }
  var floatDiv = {
    float: 'right'
    }
  return(
    <div>
        <h3 style={headerButton}>Home</h3>
        <h3 style={headerButton}>Notifications</h3>
        <h3 style={headerButton}>Messages</h3>

      <div style={floatDiv}>
        <input type="text" name="search" placeholder="Search" style={searchStyle}/>
        <h3 style={headerButton, tweetStyle}>Tweet</h3>
      </div>
    </div>
  )
}

export default Header;
