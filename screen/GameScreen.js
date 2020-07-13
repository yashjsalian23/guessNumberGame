import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = ({userChoice}) => {

    const [ currentGuess, setCurrentGuess ] = useState(randomNumberBetween(1, 100, userChoice));

    const randomNumberBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max-min)) + min;
        if(randomNumber === exclude){
            return randomNumberBetween(max, min, exclude);
        } else {
            return randomNumber;
        }
    }


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}> 
                <Button title="HIGHER" />
                <Button title="LOWER" />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 0,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }
});

export default GameScreen;