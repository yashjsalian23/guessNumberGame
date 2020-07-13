import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({onGameStart}) => {

    const [enteredtext, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    let inputChangeHandler = inputText => {
        setEnteredText(
            inputText.replace(/[^0-9]/g, '')
        )
    }

    let resetInputHandler = () => {
        setEnteredText('');
        setConfirmed(false);
    }

    let confirmInputHandler = () => {
        let confirmedValue = parseInt(enteredtext);
        if(isNaN(confirmedValue) || confirmedValue <= 0 || confirmedValue >= 99){
            return Alert.alert(
                'Invalid Number', 
                'Number should be between 1 and 99', 
                [{text:'Okay', style:'destructive', onPress: resetInputHandler}]);
        }
        setConfirmed(true);
        setSelectedNumber(confirmedValue);
        setEnteredText('');
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput =  
            <Card style={styles.summaryContainer}>
                <Text>You have selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => onGameStart(selectedNumber)} />
            </Card>
    }

    return (
     <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                     style={styles.input}
                     blurOnSubmit
                     autoCapitalize="none"
                     autoCorrect={false}
                     keyboardType="number-pad"
                     maxLength={2}
                     onChangeText={inputChangeHandler} 
                     value={enteredtext}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler} /></View>
                        <View style={styles.button}><Button title="confirm" color={Colors.primary} onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
     </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
      }
});

export default StartGameScreen;