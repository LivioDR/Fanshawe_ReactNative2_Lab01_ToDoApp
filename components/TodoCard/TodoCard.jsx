import React from "react";
import { View, Text } from "react-native"
import styles from "./TodoCardStyle";
import StatusSwitch from "./StatusSwitch/StatusSwitch";

const TodoCard = ({name, status}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {name}
            </Text>
            <StatusSwitch status={status} />
        </View>
    )
}
export default TodoCard