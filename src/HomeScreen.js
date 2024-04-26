import React from "react";
import { Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                <Button mode="contained" onPress={() => navigation.navigate('Details')}>
                    go to details
                </Button>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;
