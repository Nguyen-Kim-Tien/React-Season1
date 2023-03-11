/*
Làm ẩn, hiện thông tin

1. Trạng thái state của biến kiểm tra điều kiện là true hoặc false chứ không phải "true" hay "false"

*/

import React from "react";
import ComponentChild from "./ComponentChild";

class MyComponent extends React.Component {
  state = {
    user: [
      { name: "Nguyễn Văn An", age: "26", framework: "ReactJS" },
      { name: "Hà Huy Hiệu", age: "21", framework: "NodeJS" },
      { name: "Nguyễn Thị Linh", age: "23", framework: "Lavarel" },
    ],
    isShowHide: false,
  };

  handleShowHide = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  render() {
    return (
      <>
        {this.state.isShowHide === false ? (
          <>
            <div>
              <button onClick={() => this.handleShowHide()}>Show</button>
            </div>
          </>
        ) : (
          <>
            {this.state.user.map((item) => (
              <ComponentChild
                name={item["name"]}
                age={item.age}
                framework={item.framework}
              />
            ))}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default MyComponent;
