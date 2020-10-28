import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-list">
            <div className="todo-item">
                <input type="checkbox" checked={props.item.completed} />
                <p>{props.item.text}</p>
            </div>
        </div>   
    )
}

export default TodoItem