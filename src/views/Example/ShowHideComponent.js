/*
1. Chú ý:         <button onClick={() => this.handleDeleteJob(item)}>
                    Delete
                  </button>
    thì phải truyền vào item

*/

import React, { Component } from "react";

export default class ShowHideComponent extends Component {
  state = {
    isShowHide: false,
  };

  handleClick = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };
  handleDeleteJob = (job) => {
    this.props.deleteJob(job);
  };
  render() {
    return (
      <>
        {this.state.isShowHide === false ? (
          <>
            <button
              onClick={() => {
                this.handleClick();
              }}
            >
              Show
            </button>
          </>
        ) : (
          <>
            {this.props.arrJob.map((item) => {
              return (
                <div key={item.id}>
                  {item.jobName} - {item.salary} <></>{" "}
                  <button onClick={() => this.handleDeleteJob(item)}>
                    Delete
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => {
                this.handleClick();
              }}
            >
              Hide
            </button>
          </>
        )}
      </>
    );
  }
}
