import { StyleSheet } from "react-native";

const AddTaskFormStyles = StyleSheet.create({
    container: {
        paddingBottom: 75,
        width: '100%',
        padding: '5%',
        backgroundColor: '#F0F0F0',
    },
    inputField: {
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: '2%',
        width: '80%',
        height: 50,
    },
    switch: {
        maxWidth: '15%',
    },
    textSwitchWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5%',
    },
    button: {
        backgroundColor: 'lightblue',
        borderWidth: 1.5,
        borderRadius: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: 'black',
        fontSize: 18,
    },
})
export default AddTaskFormStyles