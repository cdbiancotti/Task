import React, { Component } from 'react';
import PropTypes from "prop-types"; // READ THE DOCUMENTATION ABOUT THIS PACKAGE

class Task extends Component{

    setStyle() {
        return {
            color: this.props.task.done ? "white" : "black",
            backgroundColor: this.props.task.done ? "black" : "gray",
            textDecoration: this.props.task.done ? "line-through" : "none",
        }
    }

    render() {
        const {task} = this.props;
        return  <p className="red" style={this.setStyle()}> 
                {/* you can use for the style of an element a link with a .css file */}
                {/* or an attribute style={} filled with an object (wrote in the style attribute or called from a variable (**) ) */}
                    {task.title} - {task.description} - {task.done} - {task.id}
                    <input type="checkbox"/>
                    <button style={btnDelete}>x</button> {/* */}
                </p>
    }
}

// The code below verifies if the element getting through props has the correct type.
Task.propTypes = {
    task: PropTypes.object.isRequired,
}

// (**)
const btnDelete = {
    fontSize: "24px",
    borderRadius: "50%",
    border: "none",
}

export default Task;