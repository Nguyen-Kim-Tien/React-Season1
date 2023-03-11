/*
1. Chú ý khai báo state để dùng hàm map truyền props vào
2. Hàm ...map((item)=>(JSX)): chú ý dấu ngoặc trong hay nhọn

*/

import React from "react";
import ComponentChild from "./ComponentChild";

class MyComponent extends React.Component {
  state = {
    user: [
      { name: "Nguyễn Văn An", age: "26", framework: "ReactJS" },
      { name: "Hà Huy Hiệu", age: "21", framework: "NodeJS" },
    ],
  };
  render() {
    return (
      <>
        {this.state.user.map((item) => (
          <ComponentChild
            name={item["name"]}
            age={item.age}
            framework={item.framework}
          />
        ))}
      </>
    );
  }
}
export default MyComponent;
