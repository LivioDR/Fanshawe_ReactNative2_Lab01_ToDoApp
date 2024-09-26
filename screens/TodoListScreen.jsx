import React from "react";
import { FlatList, Text } from "react-native";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoCard from "../components/TodoCard/TodoCard";

const TodoListScreen = ({ todoItems }) => {

    return(
        <>
            <FlatList
                ListHeaderComponent={<TodoHeader/>}
                ListEmptyComponent={<Text>Please add a task to start</Text>}
                data={todoItems}
                renderItem={item => <TodoCard name={item.item.name} status={item.item.status}/>}
                keyExtractor={item => item.id}
            />
        </>
    )
}
export default TodoListScreen