import { StyleSheet } from "react-native";

const TodoCardStyle = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'lightblue',
        padding: '2%',
        margin: '2%',
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    status: {
        color: 'red',
    }
})
export default TodoCardStyle