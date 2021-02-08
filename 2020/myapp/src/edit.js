import React from 'react';
import {Button} from '@material-ui/core'

class Edit extends React.Component {

  state = {
    task: this.props.taskObj.task
  }

  onChange = (e) => {
    this.setState({task: e})
  }

  onSubmitEdit = (e) => {
    e.preventDefault();
    let updatedTask = this.props.taskObj;
    updatedTask.task = this.state.task;
    this.props.onSubmitEdit(updatedTask, this.props.taskId);
    this.props.hideEdit()
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmitEdit}>
          <input value={ this.state.task } onChange={e => this.onChange(e.target.value)}/>
          <Button type="submit" >save</Button>
        </form>
      </React.Fragment>
    )
  }
}

export default Edit;