import React, { Component } from "react";

export default class FormComponent extends Component {
  state = {
    jobTitle: "",
    jobSalary: "",
  };

  handleChangeJob = (event) => {
    this.setState({
      jobTitle: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({ jobSalary: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.jobTitle || !this.state.jobSalary) {
      alert("Thiếu dữ liệu submit !!!");
      return;
    }
    this.props.addNewJob({
      jobKey: Math.floor(Math.random() * 100),
      jobTitle: this.state.jobTitle,
      jobSalary: this.state.jobSalary,
    });
    this.setState({
      jobTitle: "",
      jobSalary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label>Job's Title: </label>
          <br />
          <input
            type="text"
            value={this.state.jobTitle}
            onChange={(e) => this.handleChangeJob(e)}
          />
          <br />
          <label>Salary: </label>
          <br />
          <input
            type="text"
            value={this.state.jobSalary}
            onChange={(e) => this.handleChangeSalary(e)}
          />
          <br />
          <div>
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
