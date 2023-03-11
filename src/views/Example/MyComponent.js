import React, { Component } from "react";
import FormComponent from "./FormComponent";
import ShowHideComponent from "./ShowHideComponent";

export default class MyComponent extends Component {
  state = {
    arrJob: [],
  };

  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };

  render() {
    return (
      <>
        <FormComponent addNew={this.addNewJob} />
        <br />
        <br />
        <ShowHideComponent arrayJob={this.state.arrJob} />
      </>
    );
  }
}
