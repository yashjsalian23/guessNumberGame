import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8, //for android
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    }
});

export default Card;