import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
    render() {
        return  this.props.tasks.map( element => <Task task={element}  key={element.id} />)
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default Tasks;