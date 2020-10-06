import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Todos'
import './App.css';
import Header from './layout/Header';
import AddTodo from './AddTodo';
import About from './pages/About';
import {v4 as uuid} from 'uuid'
//import Axios from 'axios';


class App extends Component{
  state={
    todos:[
      {
        id:1,
        title: "example to-do item,add karte raho bc",
        completed: false
      }
      
      
    ]
  }

  

  //toggle completed
  markComplete = (id) =>
    {
       this.setState({todos : this.state.todos.map(Todos =>{
         if (Todos.id === id) {
           Todos.completed = !Todos.completed
           
         }
         return Todos

       })})
    }

    //delete todo
    delTodo = (id) => {

    this.setState({todos: [...this.state.todos.filter(Todos =>Todos.id !== id
        
        )]})
    }

    //addTodo
   AddTodo = (title) => {

    const newTodo = {
      id:uuid(),
      title,
      completed : false
    }
     this.setState({ todos: [...this.state.todos, newTodo] });



     

   }

render() {
  
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header/>
      <Route path="/" render ={props =>(
        <React.Fragment>
        <AddTodo AddTodo = {this.AddTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )}/>

      <Route path="/about" component={About} />
      
      
      </div>
     </div>
     </Router>
  );
}
}

export default App;
