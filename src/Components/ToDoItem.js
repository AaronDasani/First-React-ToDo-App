import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            completed:this.props.work.completed
        }
    }
    CompleteWork=()=>{
        this.setState((state)=>{
            return state.completed=!state.completed;
        });
    }

  render() {
    const {id,title}=this.props.work;

    return (
      <div style={this.state.completed ? {opacity:0.4}:{opacity:1}} className="item">
        <input type="checkbox" checked={this.state.completed} onChange={this.CompleteWork}></input>
        <h4>{title}</h4>
        <button onClick={this.props.RemoveWork.bind(this,id)}><i className="far fa-times-circle"></i></button>
      </div>
    )
  }
}
//---PropTypes----
ToDoItem.propTypes={
    work: PropTypes.object.isRequired,
    RemoveWork:PropTypes.func.isRequired
}

export default ToDoItem
