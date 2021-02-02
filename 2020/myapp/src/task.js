import React from "react";
import Edit from './edit';


class Task extends React.Component {
  state = {
    show: false
  }

  showEdit = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    let content;
    if (this.state.show) {
      content = (<Edit hideEdit={this.showEdit} onSubmitEdit={this.props.onSubmitEdit} taskObj={this.props.taskObj} />)
    }
    return (
      <div>
      <h4>{this.props.taskObj.task} </h4>
      <button onClick={ this.showEdit }>Edit</button> 
        <button onClick={() => this.props.onDelete(this.props.taskId)}>X {this.props.taskId}</button>
        {content}
    </div>
  )
}
}

export default Task;