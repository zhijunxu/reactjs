import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./styles.css";
import ReactModal from "react-modal-resizable-draggable";

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      topY: 50,
      leftX: 100
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event) {
    console.log("open model " + event.clientX + " " + event.clientY);
    this.setState({
      modalIsOpen: true,
      topY: event.clientY,
      leftX: event.clientX + 50
    });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    //const top = 30;
    //const left = 10;
    return (
      <div className="App">
        <button onClick={this.openModal}>Open modal</button>
        <button onClick={this.openModal}>Open modal</button>
        {this.state && this.state.modalIsOpen && (
          <ReactModal
            top={this.state.topY}
            left={this.state.leftX}
            initWidth={800}
            initHeight={400}
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}
          >
            <h3>My Modal</h3>
            <div className="body">
              <p>This is the modal&apos;s body.</p>
            </div>
            <button onClick={this.closeModal}>Close modal</button>
          </ReactModal>
        )}
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
