import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: '',
    }

    cancelSubmit = event => {
        this.props.addTask(this.state.title, this.state.description);
        event.preventDefault();
    }

    onChanges = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    render() {
        return(
            <form onSubmit={this.cancelSubmit}>
                <input type="text" name="title" placeholder="Whrite a Task" onChange={this.onChanges} />
                <br />
                <br />
                <textarea placeholder="Write a Description" name="description" onChange={this.onChanges}></textarea>
                <br />
                <input type="submit" value="Add Task"/>
            </form>
        )
    }
}