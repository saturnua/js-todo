import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
                      todos, onDeleted,
                      onToggleImportant,
                      onToggleDone, searchData, status
                  }) => {

    // const elements = todos.map((item) => {
    //     const {id, ...itemProps} = item;
    //     if (item.label.toLowerCase().includes(searchData)) {
    //         return (
    //             <li key={id} className="list-group-item">
    //                 <TodoListItem
    //                     {...itemProps}
    //                     onDeleted={() => onDeleted(id)}
    //                     onToggleImportant={() => onToggleImportant(id)}
    //                     onToggleDone={() => onToggleDone(id)}
    //                 />
    //             </li>
    //         );
    //     }
    //
    // });
    // if (status  'all')

    console.log('todos', todos)

    const elements = todos
        .filter(({done}) => (status === "all" || `${done}` === status))
        .filter(({label}) => label.toLowerCase().includes(searchData.toLowerCase()))
        .map(({id, ...itemProps}) => (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        ));

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
