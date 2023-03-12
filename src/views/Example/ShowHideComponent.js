import React, { Component } from "react";

export default class ShowHideComponent extends Component {
  state = {
    isShowHide: false,
  };

  handleShowHide = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  handleDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    const { arrayJob } = this.props; //arrayJob = this.props.arrayJob
    return (
      <>
        {this.state.isShowHide === false ? (
          <>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </>
        ) : (
          <>
            {arrayJob.map((item) => {
              return (
                <div key={item.jobKey}>
                  {item.jobTitle} - {item.jobSalary} <></>
                  <button onClick={() => this.handleDelete(item)}>
                    Delete
                  </button>
                </div>
              );
            })}
            <button onClick={() => this.handleShowHide()}>Hide</button>
          </>
        )}
      </>
    );
  }
}
