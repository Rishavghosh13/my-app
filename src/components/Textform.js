import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
        
    }
    const handleOnChange=(event)=>{
        console.log("On click");
        setText(event.target.value)
    }

    const handleLwClick=()=>{
      let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleSpeak=()=>{
          let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("is Speaking","success")

    }
    const handleClear=()=>
   {
    setText('')
    props.showAlert("is Clear","success")
   } 

   const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied","success")
    document.getSelection().removeAllRanges()
}
const clearSpace = () => {
  let newT = text.split(/[ ]+/);
  setText(newT.join(" "));
  props.showAlert("Extra Space is cleared","success")
}
const cnt=()=>{
  let newT = text.split(/[ ]+/);
  newT= newT.join(" ")
  const v=newT.split(" ").length
  return v
  

}

    const [text, setText] = useState('')
 

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#080808' , color:props.mode === 'light' ? 'black': 'white'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>


        </div>
        <button className={`btn btn-${props.change} border mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.change} border mx-2`} onClick={handleLwClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.change} border mx-2`} onClick={handleSpeak}>Speak</button>
        <button className={`btn btn-${props.change} border mx-2`} onClick={handleClear}>Clear</button>
        <button className={`btn btn-${props.change} border mx-2`} onClick={copyText}>Copy</button>
        <button className={`btn btn-${props.change} border mx-2`} onClick={clearSpace}>Clear Extra Space</button>
        <div className="input-group mb-3">
</div>
</div>
    <div className="container my-2">
      <h1> Your text summary </h1>
      <p>{text===""?0:text.charAt(text.length-1)===" "?cnt()-1:cnt()} words , {text.length} characters</p>
      <p>{((text.length)*0.0016).toFixed(2)} Minutes read</p>
    </div>
    </>
  )
}
