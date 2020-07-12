import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {

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
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GameScreen;