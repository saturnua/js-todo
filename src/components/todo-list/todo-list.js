import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
                      todos, onDeleted,
                      onToggleImportant,
                      onToggleDone, searchData
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

    const elements = todos
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
