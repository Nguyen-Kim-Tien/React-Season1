/*
Chú ý: 
1. Sử dụng onChange = {this.handleChangeName} thì khi viết phương thức handleChangeName chỉ được viết theo arrow function:
const handleChangeName = (e) => {
    this.setState({name: e.target.value})
}

2. Sử dụng onChange = {(event)=>this.handleChangeName(event)} thì khi viết phương thức handleChangeName có thể viết theo arrow function hoặc hàm bình thường

3. Tham số truyền vào có thể là tên bất kì, nhưng để lấy giá trị hiện tại thẻ input thì cần câu lệnh 
<tham số>.target.value

*/

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tiến",
    university: "HCMUT",
    framework: "React JS",
  };

  handleOnChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleOnChangeUniversity = (a) => {
    this.setState({
      university: a.target.value,
    });
  };

  handleOnChangeFrameWork = (event) => {
    this.setState({
      framework: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <label>Name: {this.state.name}</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <br />
          <label>University: {this.state.university}</label>
          <br />
          <input
            type="text"
            value={this.state["university"]}
            onChange={this.handleOnChangeUniversity}
          />
          <br />
          <label>Framework: {this.state.framework}</label>
          <br />
          <input
            type="text"
            value={this.state.framework}
            onChange={(a) => this.handleOnChangeFrameWork(a)}
          />
        </form>
      </>
    );
  }
}
export default MyComponent;
