import { StyleSheet } from "react-native";

const TodoCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'lightblue',
        padding: '2%',
        marginVertical: '2%',
    },
    title: {
        fontSize: 18,
        color: 'black',
        maxWidth: '60%',
        alignSelf: 'center',
    },
    status: {
        color: 'red',
    }
})
export default TodoCardStyle