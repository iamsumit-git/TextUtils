import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  //setText('hi, im updated') // correct way to update text
  
  const handleOnClick = () => {
   //console.log('click was triggdered' + text)
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Converted to uppercase 🥳", "success")
  }
  const handleOnClick_Lower = () => {
   //console.log('click was triggdered' + text)
   let newText = text.toLowerCase();;
   setText(newText)
   props.showAlert("Converted to lowercase 🥳", "success")
  }
  const handleOnChange = (event) => {
   setText(event.target.value)
  }
  const clearText = () => {
   let newText = ''
   setText(newText)
   props.showAlert("Cleard 🥳", "success")
  }

  const handleCopy=() => {
    var text = document.getElementById("my-box")
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Copied! 🥳", "success")
  }

  const removeExtraSpace =() =>{
    let newText = text.split(/[ ]+/)
    console.log(newText)
    setText(newText.join(" "))
    props.showAlert("Extra space Removed! 🥳", "success")
  }

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return(
    <>  
   <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h3 className="mb-4">{props.heading}</h3>
    <div className="mb-3"> 
    <textarea className="form-control"placeholder="Enter text here" id="my-box" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#a6c9e5':'white', color:props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button disabled={text.length=== 0} className="btn btn-primary mx-2 mb-2"  onClick={handleOnClick}>Convert To UpperCase</button>
    <button disabled={text.length=== 0} className="btn btn-primary mx-2 mb-2" onClick={handleOnClick_Lower}>Convert To LowerCase</button>
    <button disabled={text.length=== 0} className="btn btn-primary mx-2 mb-2" onClick={handleCopy}>Copy</button>
    <button disabled={text.length=== 0} className="btn btn-primary mx-2 mb-2" onClick={clearText}>clear</button>
    <button disabled={text.length=== 0} className="btn btn-primary mx-2 mb-2" onClick={removeExtraSpace}>clearExtraSpace</button>
   </div>
   <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>Total: {wordCount} {wordCount === 1 ? 'word' : 'words'} & total: {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "nothing to preview" } </p>
   </div>

   </>
  )
}
