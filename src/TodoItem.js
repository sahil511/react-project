import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle =  () => {
        return{
            background : '#add8e6',
            padding: '10px',
            margin: '5px',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
                
        }
    }


    render() {
        const { id,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                    
                </p>
                
            </div>
        )
    }
}
//prop-types usage
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
  }

  const btnStyle= {
      background : 'black',
      color: 'yellow',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      float: 'right'
  }


export default TodoItem
