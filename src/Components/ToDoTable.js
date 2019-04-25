import React, {Component} from 'react';
// import ListOfWorks from '../ListOfWorks';
import ToDoItem from './ToDoItem'
import AddToDoItem from './AddToDoItem';
import axios from 'axios';


class ToDoTable extends Component {

  constructor(){
    super();
    this.state={
      ListOfWorks:[],
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res=>this.setState({ListOfWorks:res.data}));
  }
  RemoveWork=(id)=>{
    this.setState({ListOfWorks:this.state.ListOfWorks.filter((work)=>work.id!==id)});
  }
  AddWork=(title)=>{
    
    axios.post("https://jsonplaceholder.typicode.com/todos",{
      title:title,
      completed:false
    }).then(res=>this.setState({ListOfWorks:[...this.state.ListOfWorks, res.data]}));

  }

  render(){
    return (
      <div>
        <AddToDoItem addWork={this.AddWork}/>
        {this.state.ListOfWorks.map((work)=><ToDoItem key={work.id} work={work} RemoveWork={this.RemoveWork}/>)}
        
      </div>
    )
  }


}

export default ToDoTable;