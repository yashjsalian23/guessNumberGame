//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';

export default function App() {

  const [userChoice, setUserChoice] = useState();

  let startGameHandler = enteredNumber => {
    setUserChoice(enteredNumber);
  }

  let content = userChoice ? <StartGameScreen onGameStart={startGameHandler} /> : <GameScreen userChoice={userChoice} />;

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
