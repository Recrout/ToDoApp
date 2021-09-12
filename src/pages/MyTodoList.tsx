import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import CreateTodoForm from "../components/CreateTodoForm";
import {PageWrapper} from "./HomePage";
import TodoList from "../components/TodoList";
import Api from "../api/api";
import {TodoItem} from "../api/models/TodoItem";
import {CircularProgress} from "@material-ui/core";

const Header = styled.h1`
font-size: 25px;
font-weight: bold;
`


const MyTodoList: FC = () => {
    const [loading, setLoading] = useState(true)
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const [todoCreated, setTodoCreated] = useState(false)

    const api = new Api()

    useEffect(() => {
        api.GetTodos().then(r => {
            setTodoItems(r.data)
            setLoading(false)
        })
    },[])

    useEffect(() => {
        if (todoCreated) {
            setLoading(true)
            api.GetTodos().then(r => {
                setTodoItems(r.data)
                setLoading(false)
            })
        }
    },[todoCreated])

    return (
        <PageWrapper>
            <Header>My todo list</Header>
            {loading ? <CircularProgress/> : <TodoList todoItems={todoItems}/>}
            <CreateTodoForm setTodoCreated={setTodoCreated}/>
        </PageWrapper>
    );
};

export default MyTodoList;