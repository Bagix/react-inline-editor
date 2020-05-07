import React, { Component } from "react";
import Editor from "./Components/Editor/Editor";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {
    text: "Some text. Just click on it and edit!",
    openEditor: false,
    textStyle: {
      color: "#000",
      bold: false,
      underline: false,
      italic: false
    }
  }

  openEditorHandler = () => {
    this.setState({openEditor: true});
  }

  closeEditorHandler = () => {
    this.setState({openEditor: false});
  }

  editTextHandler = (event) => {
    const newText = event.target.value;
    this.setState({text: newText});
  }

  changeBoldHandler = () => {
    let newStyle = {...this.state.textStyle};
    newStyle.bold = !this.state.textStyle.bold;
    this.setState({textStyle: newStyle});
  }

  changeUnderlineHandler = () => {
    let newStyle = {...this.state.textStyle};
    newStyle.underline = !this.state.textStyle.underline;
    this.setState({textStyle: newStyle});
  }

  changeItalicHandler = () => {
    let newStyle = {...this.state.textStyle};
    newStyle.italic = !this.state.textStyle.italic;
    this.setState({textStyle: newStyle});
  }

  changeColorHandler = (event) => {
    let newStyle = {...this.state.textStyle}
    newStyle.color = event.target.value;
    this.setState({textStyle: newStyle});
  }

  render() {
    let editor = null;

    if(this.state.openEditor) {
      editor = <Editor
        text={this.state.text}
        edit={(event) => this.editTextHandler(event)}
        bold={this.changeBoldHandler}
        underline={this.changeUnderlineHandler}
        italic={this.changeItalicHandler}
        color={this.state.textStyle.color}
        updateColor={this.changeColorHandler}
        close={this.closeEditorHandler}
        />
    }

    const editorStyle = {
      color: `${this.state.textStyle.color}`,
      fontWeight: `${this.state.textStyle.bold ? "bold" : "normal"}`,
      textDecoration: `${this.state.textStyle.underline ? "underline" : "none"}`,
      fontStyle: `${this.state.textStyle.italic ? "italic" : "normal"}`
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {editor}
          <p className="text"
          style={editorStyle}
          onClick={this.openEditorHandler}>
            {this.state.text}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
