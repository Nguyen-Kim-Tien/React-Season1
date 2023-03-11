/*
Có 1 form: name, university, framework, address
Nhấn submit1 hoặc submit2 sẽ console.log các thông tin đó

Chú ý: 
1. Sử dụng onChange = {this.handleChangeName} thì khi viết phương thức handleChangeName chỉ được viết theo arrow function:
const handleChangeName = (e) => {
    this.setState({name: e.target.value})
}

2. Sử dụng onChange = {(event)=>this.handleChangeName(event)} thì khi viết phương thức handleChangeName có thể viết theo arrow function hoặc hàm bình thường

3. Sử dụng onChange = {(a) => this.setState({name:a.target.value})}

4. Tham số truyền vào có thể là tên bất kì, nhưng để lấy giá trị hiện tại thẻ input thì cần câu lệnh 
<tham số>.target.value

5. Khi làm việc với form thì cần dùng event.preventDefault() để ngăn chặn reload (nếu ko có thì khi console.log, ngay lập tức trình duyệt reload lại); 

6. Có 2 cách sử dụng events như button Submit1 và Submit2 (đều như nhau), nhưng nếu Submit2 để ngoài form thì ko cần dùng even.preventDefault(), và không cần truyền vào event: onClick = {()=>this.handleClick2()}

*/

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tiến",
    university: "HCMUT",
    framework: "React JS",
    address: "HCM city",
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

  handleClick1 = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleClick2 = (event) => {
    event.preventDefault();
    console.log(this.state);
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
          <br />
          <label>Address: {this.state.address}</label>
          <br />
          <input
            type="text"
            value={this.state.address}
            onChange={(a) => this.setState({ address: a.target.value })}
          />
          <br />
          <button onClick={this.handleClick1}>Submit 1</button>
          <br />
          <button onClick={(event) => this.handleClick2(event)}>
            Submit 2
          </button>
        </form>
      </>
    );
  }
}
export default MyComponent;
