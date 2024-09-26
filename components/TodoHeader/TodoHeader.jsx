import React from "react";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '4%',
        paddingBottom: '4%',
        paddingTop: 50,
        backgroundColor: '#F0F0F0',
    },
    text: {
        fontSize: 36,
    },
    signature: {
        
    }
})

const TodoHeader = () => {
    return(
        <View style={headerStyles.container}>
            <Ionicons
                name="checkmark-done-outline"
                size={36}
                color={'blue'}
            />
            <Text style={headerStyles.text}>
                ToDo App
            </Text>
            <Text style={headerStyles.signature}>
                by Livio Reinoso
            </Text>
        </View>
    )
}
export default TodoHeader