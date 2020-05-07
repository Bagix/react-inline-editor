import React from 'react';
import './Editor.css'

const editor = (props) => {
  return(
    <div className="editor">
      <span className="close" onClick={props.close}>X</span>
      <div className="controls">
        <button type="button" onClick={props.bold} title="Bold">B</button>
        <button type="button" onClick={props.underline} title="Underline">U</button>
        <button type="button" onClick={props.italic} title="Italic">I</button>
        <input type="color" value={props.color} onChange={props.updateColor} title="Color"/>
      </div>
      <textarea onChange={props.edit} value={props.text}></textarea>
    </div>
  )
}

export default editor;