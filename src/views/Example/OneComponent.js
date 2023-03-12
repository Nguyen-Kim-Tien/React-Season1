import React, { Component } from "react";

export default class OneComponent extends Component {
  state = {
    name: "",
    salary: "",
    isShowHide: false,
    arrJobs: [],
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.salary) {
      alert("Thiếu dữ liệu !!!");
      return;
    }
    let job = {
      name: this.state.name,
      salary: this.state.salary,
    }; //tạo job từ việc submit
    this.setState({
      arrJobs: [...this.state.arrJobs, job], //thêm job khi submit
    });
    this.setState({
      name: "",
      salary: "",
    });
  };

  handleShowHide = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  handleDeleteJob = (job) => {
    this.setState({
      arrJobs: this.state.arrJobs.filter((item) => item.name !== job.name),
    });
  };

  render() {
    return (
      <>
        <div>
          <form>
            <label>Title: </label>
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleChangeName(e)}
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
            <button
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          {this.state.isShowHide === false ? (
            <>
              <button onClick={() => this.handleShowHide()}>Show</button>
            </>
          ) : (
            <>
              {this.state.arrJobs.map((item) => {
                return (
                  <div key={item.name}>
                    {item.name} - {item.salary}
                    <></>
                    <button onClick={() => this.handleDeleteJob(item)}>
                      Delete
                    </button>
                  </div>
                );
              })}
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </>
          )}
        </div>
      </>
    );
  }
}
