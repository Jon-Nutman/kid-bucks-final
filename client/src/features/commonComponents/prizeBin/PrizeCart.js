import React from 'react'

export default function PrizeCart(props) {
    return (
        <div>
            {props.todos.map(todo => (
        <TodoItem 
          key={'todo-' + todo.id}
          todo={todo}
          onDelete={props.onDelete}
          onStatusChange={props.onStatusChange}
        />
      ))}
        </div>
    )
}
