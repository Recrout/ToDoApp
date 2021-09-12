import React, {FC} from 'react';
import styled from "styled-components";
import {Card, CardContent, Typography} from "@material-ui/core";

interface IProps {
    todoText: string;
}

const TodoItem: FC<IProps> = ({todoText, ...props}) => {
    return <></>
};

export default TodoItem;