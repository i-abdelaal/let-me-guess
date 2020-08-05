import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>DONE!</Text>
            <Text>Number of rounds to guess is: {props.roundsNumber}</Text>
            <Text>Your Number was: {props.userNumber}</Text>
            <Button title="PLAY AGAIN" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;