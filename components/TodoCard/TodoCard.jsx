import React from "react";
import { View, Text, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./TodoCardStyle";
import StatusSwitch from "./StatusSwitch/StatusSwitch";

const TodoCard = ({name, status, id, toggle, remove}) => {
    return(
        <View style={styles.container}>
            <View style={styles.textBtnWrapper}>
                <Pressable 
                    style={styles.button}
                    onPress={remove}    
                >
                    <Ionicons name="remove-circle-outline" color={'red'} size={24}/>
                </Pressable>
                <Text style={styles.title}>
                    {name}
                </Text>
            </View>
            <StatusSwitch status={status} id={id} toggle={toggle} />
        </View>
    )
}
export default TodoCard