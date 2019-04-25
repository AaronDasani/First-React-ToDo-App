import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddToDoItem extends Component {
  state={
      title:" "
  }
  onChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
  }  
  onSubmit=(event)=>{
    event.preventDefault();
    this.props.addWork(this.state.title)
    this.setState({title:" "})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display:'flex', paddingBottom:'5px'}}>
            <input
                type="text"
                name="title"
                placeholder="Add A Job To Do..."
                style={{flex:'10'}}
                value={this.state.title}
                onChange={this.onChange}
            ></input>
            <input
                type="submit"
                value="Submit"
                className="btnSubmit"
                style={{flex:'1'}}
            ></input>
        </form>
      </div>
    )
  }
}
AddToDoItem.propTypes={
  addWork:PropTypes.func.isRequired
}
export default AddToDoItem
