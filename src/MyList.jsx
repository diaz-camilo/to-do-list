import React, { Component } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListItem from "./ListItem";

class MyList extends Component {
  // Starting state
  state = {
    listItems: this.props.theList,
    textInputValue: "",
  };

  // handle submit form event
  handleSubmit = (event) => {
    event.preventDefault(); // prevent reload

    this.setState({
      listItems: [
        ...this.state.listItems,
        { name: this.state.textInputValue, isChecked: false },
      ],
    });
  };

  // Handle change on text input field
  handleChange = (event) => {
    this.setState({
      textInputValue: event.target.value,
    });
  };

  // remove one item from the list acording to it's index in the array
  remove = (index) => {
    const newListItems = [...this.state.listItems];
    newListItems.splice(index, 1);
    this.setState({
      listItems: newListItems,
    });
  };

  // Clear all items
  handleClearAll = () => {
    this.setState({
      listItems: [],
    });
  };

  render() {
    const noItems =
      this.state.listItems.length === 0 ? (
        <span>
          <h1><span role="img" aria-label="">🥳</span></h1>
          <p><span role="img" aria-label="">🍹</span><span role="img" aria-label="">⛱️</span> You Have completed all your tasks <span role="img" aria-label="">⛱️</span><span role="img" aria-label="">🍹</span></p>
        </span>
      ) : (
        <h1> Things I should stop procrastinating:</h1>
      );
    const toDos = this.state.listItems?.map((item, index) => (
      <ListItem
        key={item}
        id={index}
        item={item}
        isCompleted={false}
        remove={this.remove}
      />
    ));
    return (
      <main>
        {noItems}
        <ListGroup variant="flush">{toDos}</ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="What next?"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Row className="mb-3">
              <Col>
                <Button variant="primary" type="submit">
                  Add to List
                </Button>
              </Col>
              <Col>
                <Button variant="danger" onClick={this.handleClearAll}>
                  Clear All
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </main>
    );
  }
}

export default MyList;
