import React, { Component } from "react";
import FormComponent from "./FormComponent";
import ShowHideComponent from "./ShowHideComponent";

export default class MyComponent extends Component {
  state = {
    arrayJob: [], //Sử dụng để truyền cho ShowHideComponent
  };

  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arrayJob: [...this.state.arrayJob, job],
    });
  }; //Sử dụng để truyền cho FormComponent

  deleteJob = (job) => {
    let currentJob = this.state.arrayJob;
    currentJob = currentJob.filter((item) => item.jobKey !== job.jobKey);
    this.setState({ arrayJob: currentJob });
  };

  render() {
    return (
      <>
        <FormComponent addNewJob={this.addNewJob} />
        <br />
        <br />
        <ShowHideComponent
          arrayJob={this.state.arrayJob}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
