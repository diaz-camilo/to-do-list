import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ListItem extends Component {
  // default state
  state = {
    isCompleted: this.props.item.isChecked,
  };

  // handle checkbox clicked
  handleChecked = (event) => {
    this.setState({
      isCompleted: !this.state.isCompleted,
    });
  };

  // handle remove button clicked, passes down its id
  handleRemoveButton = () => this.props.remove(this.props.id);

  render() {
    const variant = this.state.isCompleted && "success";
    const item = this.props.item;

    return (
      <ListGroup.Item variant={variant}>
        <div className="my-list-item">
          <Form.Check
            type="checkbox"
            label={item.name}
            onClick={this.handleChecked}
          />
          <Button variant="outline-danger" onClick={this.handleRemoveButton}>
            remove
          </Button>
        </div>
      </ListGroup.Item>
    );
  }
}

export default ListItem;
