/*
Chú ý sử dụng filter trong hàm deleteJob

*/

import React, { Component } from "react";
import FormComponent from "./FormComponent";
import ShowHideComponent from "./ShowHideComponent";

export default class MyComponent extends Component {
  state = {
    arrJob: [],
  };
  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };

  deleteJob = (job) => {
    this.setState({
      arrJob: this.state.arrJob.filter((item) => item.id !== job.id),
    });
  };

  render() {
    return (
      <>
        <FormComponent addNewJob={this.addNewJob} />
        <br />
        <ShowHideComponent
          arrJob={this.state.arrJob}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
