import React, { Component } from "react";

export default class FormComponent extends Component {
  state = {
    job: "",
    salary: "",
  };

  handleChangeJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({ salary: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.job || !this.state.salary) {
      alert("Thiếu dữ liệu submit !!!");
      return;
    }
    this.props.addNew({
      jobKey: Math.floor(Math.random() * 100),
      jobTitle: this.state.job,
      jobSalary: this.state.salary,
    });
    this.setState({
      job: "",
      salary: "",
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
            value={this.state.job}
            onChange={(e) => this.handleChangeJob(e)}
          />
          <br />
          <label>Salary: </label>
          <br />
          <input
            type="text"
            value={this.state.salary}
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
