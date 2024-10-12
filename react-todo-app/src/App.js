// 리액트 라이브러리에서 컴포넌트를 가져옴
import React, { Component } from "react";
import "./App.css";

// 랜더 안에서 UI를 작성
export default class App extends Component {

  state = {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
    ]
  }
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  

  handleClick = (id) =>{
    let newTodoData = this.state.todoData.filter(data => data.id !==id)
    console.log('newTodoData', newTodoData);
    this.setState({todoData: newTodoData})
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        
        {this.state.todoData.map((data) => ( // 인덱스도 넣을 수 있으나 추천 하지는 않음
          <div style={this.getStyle()} key={data.id}> 
            <input type="checkbox" defaultChecked={false} />
            {data.title} 
            <button style={this.btnStyle} onClick={()=> this.handleClick(data.id)}>x</button>
          </div>
      ))}

        <form style={{display:'flex'}}>
          <input type="text" name="value" style={{flex}}></input>

        </form>
        </div> 
      </div>
    );
  }
}
