import React from "react";
import ReactDom from "react-dom";
import Form from "./form";
import List from "./list";
import nextId from "react-id-generator";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CssBaseline,
} from "@material-ui/core";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: null,
    taskList: [],
    task: "",
  };

  onChange = (event) => {
    this.setState({ task: event });
  };

  onSubmit = (e) => {
    // console.log("submit");
    e.preventDefault();
    let genId = nextId();
    this.setState({
      taskList: [{ id: genId, task: this.state.task }, ...this.state.taskList],
    });
    this.setState({ task: "" });
  };

  onSubmitEdit = (e, id) => {
    let updatedTaskList = this.state.taskList;
    updatedTaskList[id] = e;
    this.setState({ taskList: updatedTaskList });
  };

  onDelete = (id) => {
    const tasks = [...this.state.taskList];
    tasks.splice(id, 1);
    this.setState({ taskList: tasks });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              To Do List
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Card>
            <CardContent>
              <Form
                onChange={this.onChange}
                task={this.state.task}
                onSubmit={this.onSubmit}
              />
              <List
                onSubmitEdit={this.onSubmitEdit}
                taskList={this.state.taskList}
                onDelete={this.onDelete}
              />
            </CardContent>
          </Card>
        </main>
      </React.Fragment>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
