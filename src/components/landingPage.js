import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LandingPage extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#4AC2A9', '#8EC9B6']} // 
                            style={styles.gradientStyle}
                            start={{x:0.4, y:0.4}}
                            end={{x:0.9,y:0.9}} >
            <SafeAreaView>
            <View style={styles.container}>
            <Image source={require('../../logoWhite.png')}/>
            <Text style={styles.text}> SIHA<Text style={styles.textBold}>TI </Text></Text>
            </View>
            </SafeAreaView>
            </LinearGradient>
        
        );  
    }
}
const styles = StyleSheet.create({  
    gradientStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        //backgroundColor: '#4AC2A9',   
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 36, 
        color: '#FFFFFF', 
        fontFamily: 'Roboto',
        marginBottom: 30,
        fontWeight: "100",
        letterSpacing: 4
    },
    textBold: {
        fontSize: 36, 
        color: '#FFFFFF', 
        fontFamily: 'roboto',
        fontWeight: 'bold',
        marginBottom: 30,
        letterSpacing: 4
    },
});