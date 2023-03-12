/*
1. Kiểm tra thiếu dữ liệu phải nằm sau e.preventDefault()
2. Trong thẻ input phải có value = {this.state.name} hoặc ... để khi submit xong thì khi ta setState cho name,salary = '' nó mới cập nhật là rỗng trong thẻ input
3. Chú ý liên quan đến id
*/

import React, { Component } from "react";

export default class FormComponent extends Component {
  state = {
    jobName: "",
    salary: "",
  };
  handleChangeName = (event) => {
    this.setState({ jobName: event.target.value });
  };

  handleChangeSalary = (e) => {
    this.setState({ salary: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.jobName || !this.state.salary) {
      alert("Thiếu dữ liệu !!!");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      jobName: this.state.jobName,
      salary: this.state.salary,
    });
    this.setState({ jobName: "", salary: "" });
  };
  render() {
    return (
      <>
        <form>
          <label>JobName: {this.state.jobName}</label>
          <br />
          <input
            type="text"
            value={this.state.jobName}
            onChange={(e) => this.handleChangeName(e)}
          />
          <br />
          <label>Salary: {this.state.salary}</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(e) => this.handleChangeSalary(e)}
          />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </>
    );
  }
}
