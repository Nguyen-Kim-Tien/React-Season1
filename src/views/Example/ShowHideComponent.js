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

  render() {
    const { arrayJob } = this.props;
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
                  {item.jobTitle} - {item.jobSalary}
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
