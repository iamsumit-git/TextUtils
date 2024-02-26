import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] =useState({
  //     color: 'black',
  //     backgroundColor: 'white'

  //     // light mode
  // });

  //  const[btnText, setBtnText]= useState("Enable Dark mode")

  // const toggleStyle =() =>{
  //     if(myStyle.color === 'black'){
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             border : '1px solid white',
  //             //dark mode
  //         })
  //         setBtnText("Enable Light mode")
  //     }
  //     else{
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //             // light mode
  //         })
  //         setBtnText("Enable Dark mode")
  //     }
  // }

  let myStyle = {
    color: props.mode === "dark" ? "white" : '"#042743',
     backgroundColor: props.mode === 'dark'? 'rgb(36 74 100)' : 'white',
    // border : '1px solid'
    //borderColor: props.mode === 'dark' ? 'white' : '"#042743',
  };
  return (
    <div className="container">
      <h1 className="my-3" style={{color:myStyle.color}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the 
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the 
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatibal</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the accordion-body,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-outline-primary"> {btnText}</button>
      </div> */}
    </div>
  );
}
