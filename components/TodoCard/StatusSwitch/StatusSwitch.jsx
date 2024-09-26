import React from "react";
import { Switch, Text, View } from "react-native";
import styles from "./StatusSwitchStyle";

const StatusSwitch = ({status, toggle}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {status ? 'Done' : 'Due'}
            </Text>
            <Switch
                style={styles.switch}
                value={status}
                onValueChange={toggle}
            />
        </View>
    )
}
export default StatusSwitch