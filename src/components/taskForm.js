import React from 'react';

export function TaskForm(props) {    
    return (
        <div className="center-div">
            <form id="taskform" onSubmit={props.handleSubmit}>
                <input 
                type="text"
                id="task"
                onChange={props.handleChange}
                />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    )
}