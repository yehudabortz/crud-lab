import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addReview(this.state);
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value,
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
