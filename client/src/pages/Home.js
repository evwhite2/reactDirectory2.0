import React from "react";

import Wrapper from "../components/Wrapper"
import compass from "../images/CompassImg.jpg";

var imgStyle={
  maxHeight: "820px",
  maxWidth:"1200px"
}

function Home(){
  return (
    <Wrapper>
      <h1 className="logo">Employee Directory 2.0</h1>
      
      <img alt="by AbsolutVision on Unsplash" style={imgStyle} src={compass}/>
     
      <span className="caption">Photo by AbsolutVision on Unsplash</span>
    </Wrapper>
  );

}


export default Home;
