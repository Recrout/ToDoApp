import React, {FC} from 'react';
import {arrayMove, List} from "react-movable";
import {TodoItem} from "../api/models/TodoItem";


interface IProps {
    todoItems: TodoItem[]
}

const TodoList : FC<IProps> = ({todoItems}) => {
    const [items, setItems] = React.useState<TodoItem[]>(todoItems);

    return (
        <div
            style={{
                maxWidth: '300px',
                margin: '0px auto',
                padding: '3em'
            }}
        >
            <List
                values={items}
                onChange={({ oldIndex, newIndex }) =>
                    setItems(arrayMove(items, oldIndex, newIndex))
                }
                renderList={({ children, props, isDragged }) => (
                    <ul
                        {...props}
                        style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
                    >
                        {children}
                    </ul>
                )}
                renderItem={({ value, props, isDragged, isSelected }) => (
                    <li
                        {...props}
                        style={{
                            ...props.style,
                            padding: '1.5em',
                            margin: '0.5em 0em',
                            listStyleType: 'none',
                            cursor: isDragged ? 'grabbing' : 'grab',
                            border: '2px solid #CCC',
                            boxShadow: '3px 3px #AAA',
                            color: '#333',
                            borderRadius: '5px',
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
                        }}
                        onClick={() => {

                        }}
                    >
                        <h1>{value.name}</h1>
                        <p>{value.text_todo}</p>
                    </li>
                )}
            />
        </div>
    );
};

export default TodoList;