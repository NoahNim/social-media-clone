import React from "react";

var feedDivStyle = {
  width: '50%',
  float: 'left'
}

function Feed(){
  return(
    <div style={feedDivStyle}>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Lorem Ipsum</p>
        <hr/>
        <strong>Lorem Ipsum</strong>
      </div>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default Feed;
