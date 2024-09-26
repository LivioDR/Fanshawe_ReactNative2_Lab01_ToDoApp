import React from "react";
import { View, Text } from "react-native"
import styles from "./TodoCardStyle";

const TodoCard = ({name, status}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {name}
            </Text>
            <Text style={styles.status}>
                {status ? 'Done' : 'Due'}
            </Text>
        </View>
    )
}
export default TodoCard