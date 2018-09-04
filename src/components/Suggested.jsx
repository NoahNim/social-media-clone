import React from "react";

var suggestedDivStyle = {
  width: '20%',
  float: 'left'
}

function Suggested(){
  return(
    <div style={suggestedDivStyle}>
      <div>
        <img/>
        <h5>Lorem ipsum</h5>
      </div>

      <div>
        <img/>
        <h5>Lorem ipsum</h5>
      </div>

      <div>
        <img/>
        <h5>Lorem ipsum</h5>
      </div>
    </div>
  )
}

export default Suggested;
