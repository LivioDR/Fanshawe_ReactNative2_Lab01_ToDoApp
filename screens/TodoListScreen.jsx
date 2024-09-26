import React from "react";
import { View, Text } from "react-native";
import TodoHeader from "../components/TodoHeader/TodoHeader";

const TodoListScreen = ({ todoItems = [] }) => {

    return(
        <>
            <TodoHeader/>
        </>
    )
}
export default TodoListScreen