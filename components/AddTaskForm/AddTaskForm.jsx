import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Switch } from "react-native";
import uuid from 'react-native-uuid';
import styles from "./AddTaskFormStyles";

const AddTaskForm = ({add}) => {

    const [status, setStatus] = useState(false)
    const [isInputValid, setIsInputValid] = useState(false)
    const [task, setTask] = useState('')

    const inputValidation = () => {
        if(task.trim().length < 1){
            return false
        }
        else{
            return true
        }
    }

    const toggle = () => {
        setStatus(!status)
    }

    const addTask = () => {
        if(inputValidation()){
            add({
                id: uuid.v4(),
                name: task,
                status: status,
            })
            setStatus(false)
            setTask('')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.textSwitchWrapper}>
                <TextInput 
                    style={styles.inputField}
                    placeholder="Your task"
                    value={task}
                    onChangeText={setTask}    
                />
                <Switch style={styles.switch}
                    onValueChange={toggle}
                    value={status}
                    />
            </View>
            <Pressable 
                style={styles.button}
                onPress={addTask}
                >
                <Text style={styles.buttonLabel}>
                    Add task
                </Text>
            </Pressable>
        </View>
    )
}
export default AddTaskForm