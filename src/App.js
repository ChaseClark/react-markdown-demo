import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'; 
import FormControl from 'react-bootstrap/lib/FormControl'; 


const marked = require("marked")

class App extends Component {

  state = {
    markdown: ""
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextArea">
            <ControlLabel>Markdown Editor Demo</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Type some markdown here." value={markdown} onChange={(event)=>this.update(event.target.value)}></FormControl>
          </FormGroup>
        </div>

        <div>
          <h1>Markdown Output:</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>

          </div>
        </div>

      </div>
    );
  }

  update(markdown){
    this.setState({markdown});
  }
}

export default App;
