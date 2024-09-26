import { StyleSheet } from "react-native";

const TodoCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightblue',
        padding: '2%',
        marginVertical: '2%',
    },
    textBtnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '60%',
        alignItems: 'center',
    },
    button: {
        padding: '5%',
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