
import React, { Component } from 'react';
import PropTypes  from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="title"
                
                style={{
                    flex: '10',
                    padding: '10px'
                }}
                placeholder="Add Todo ..." 
                value={this.state.title}
                onChange={this.onChange}   
                />

                <input
                onClick={this.onSubmit}
                type="button"
                value="submit"
                className="btn"
                style={{
                    flex: '1'
                }}
                />
            </form>
        )
    }
}

//prop-types usage
AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired,
    
  }


export default AddTodo;
