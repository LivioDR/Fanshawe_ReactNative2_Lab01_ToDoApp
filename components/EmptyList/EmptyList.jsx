import React from "react";
import { View, Text } from "react-native";

const EmptyList = () => {
    return(
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingVertical: '50%',
        }}>
            <Text style={{
                fontSize: 18,
            }}>
                Please add a task to start
            </Text>
        </View>
    )
}
export default EmptyList