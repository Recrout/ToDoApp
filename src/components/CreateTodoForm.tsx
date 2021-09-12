import React, {FC, useState} from 'react';
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {TodoItem} from "../api/models/TodoItem";
import Api from "../api/api";


interface Props {
    setTodoCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTodoForm: FC<Props> = ({setTodoCreated}) => {
    const initialValues: TodoItem = {
        name: "",
        text_todo: ""
    }

    const api = new Api()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            setTodoCreated(false)
            api.CreateTodo(values).then(() => {
                setTodoCreated(true)
            })
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id={"name" as keyof TodoItem}
                    name={"name" as keyof TodoItem}
                    label="Todo name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    disabled={formik.isSubmitting}
                />
                <TextField
                    fullWidth
                    id={"text_todo" as keyof TodoItem}
                    name={"text_todo" as keyof TodoItem}
                    label="Todo description"
                    type="text"
                    value={formik.values.text_todo}
                    onChange={formik.handleChange}
                    multiline
                    disabled={formik.isSubmitting}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Create todo
                </Button>
            </form>
        </div>
    );
};

export default CreateTodoForm;