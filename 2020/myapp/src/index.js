import React from "react";
import ReactDom from "react-dom";
import Form from './form';
import List from "./list";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: null,
    taskList:[],
    task: ""
  };
  
  onChange = (event) => {
    this.setState({ task: event })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ taskList: [ this.state.task, ...this.state.taskList]})
    this.setState({ task: "" })
  }

  onDelete = (id) => {
    const tasks = [...this.state.taskList];
    tasks.splice(id, 1);
    this.setState({taskList: tasks})
  }

  render() {
    return <div>
      <Form onChange={this.onChange} task={this.state.task} onSubmit={this.onSubmit}/>
      <List taskList={this.state.taskList} onDelete={this.onDelete}/>
    </div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
