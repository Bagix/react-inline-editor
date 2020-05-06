import React from 'react';

const editor = (props) => {
  return(
    <div className="editor">
      <span className="close" onClick={props.close}>X</span>
      <button type="button" onClick={props.bold}>B</button>
      <button type="button" onClick={props.underline}>U</button>
      <button type="button" onClick={props.italic}>I</button>
      <input type="color" value={props.color} onChange={props.updateColor}/>
      <textarea onChange={props.edit} value={props.text}></textarea>
    </div>
  )
}

export default editor;