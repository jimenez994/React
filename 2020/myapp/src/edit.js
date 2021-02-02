import React from 'react';

class Edit extends React.Component {

  state = {
    task: this.props.taskObj.task
  }

  onChange = (e) => {
    this.setState({task: e})
  }

  onSubmitEdit = () => {
    let updatedTask = this.props.taskObj;
    updatedTask.task = this.state.task;
    this.props.onSubmitEdit(updatedTask, this.props.taskId);
    this.props.hideEdit()
  }

  render() {
    return (
      <div>
        <input value={ this.state.task } onChange={e => this.onChange(e.target.value)}/>
        <button onClick={this.onSubmitEdit}>save</button>
      </div>
    )
  }
}

export default Edit;