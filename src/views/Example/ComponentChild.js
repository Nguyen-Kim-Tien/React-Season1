/*
1. Sử dụng const {name, age, framework} = this.props (chú ý là tên biến khi dùng destructoring phải trùng với các tham số props truyền vào) sẽ thay thế cho:
const name = this.props.name
const age = this.props.age
const framework = this.props.framework

*/

import React from "react";

class MyComponent extends React.Component {
  render() {
    const { name, age, framework } = this.props;
    return (
      <>
        <div>
          Name: {name}. Age: {age}. Framework: {framework}
        </div>
      </>
    );
  }
}
export default MyComponent;
