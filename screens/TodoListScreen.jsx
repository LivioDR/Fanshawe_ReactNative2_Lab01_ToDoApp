import React from "react";
import { FlatList } from "react-native";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoCard from "../components/TodoCard/TodoCard";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";
import EmptyList from "../components/EmptyList/EmptyList";

const TodoListScreen = ({ todoItems, toggle, remove, add }) => {

    return(
        <>
            <TodoHeader/>
            <FlatList
                ListEmptyComponent={<EmptyList/>}
                data={todoItems}
                renderItem={item => <TodoCard 
                    name={item.item.name} 
                    toggle={()=>{toggle(item.item.id)}} 
                    remove={()=>{remove(item.item.id)}}
                    id={item.item.id} 
                    status={item.item.status}/>}
                keyExtractor={item => item.id}
            />
            <AddTaskForm add={add}/>
        </>
    )
}
export default TodoListScreen