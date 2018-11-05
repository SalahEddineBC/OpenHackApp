import React from 'react';
import { StyleSheet, Text, TextInput, View, Button ,Image,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  handleLogin = () => {
    // TODO: Firebase stuff...
    const { email, password } = this.state;
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../resize.png')}/>
        <Text style={styles.text} > SIHA<Text style={styles.textBold} >TI</Text> </Text> 
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleLogin} style={styles.newButton} >
         <Text style={styles.newButtonText} > Se connecter </Text> 
         </TouchableOpacity>
        
         <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={styles.newButton2} >
         <Text style={styles.newButtonText2} >Vous n'avez pas un compte ? S'inscrire</Text> 
         </TouchableOpacity>
        {/*
        <Button color="#4AC29A" title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FFFFFF' 
  },
  textInput: {
    height: 45,
    width: '90%',
    borderColor: '#FFFFFF',
    borderBottomColor: '#4AC29A',
    borderWidth: 1,
    marginTop: 8, 
    fontSize: 20 
  },
  text: {
    fontSize: 24, 
    color: '#4AC29A', 
    fontFamily: 'Times New Roman',
    marginTop: 10,
    marginBottom: 30,
    letterSpacing: 3
  },
  textBold: {
    fontSize: 24, 
    color: '#4AC29A', 
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    marginBottom: 30,
    letterSpacing: 3
  }, 
  newButton: {
    width: 150, 
    height: 40,
    backgroundColor: '#4AC29A', 
    borderRadius: 50,
    alignItems: 'center', 
    marginTop: 40, 
    marginBottom: 20
  }, 
  newButtonText: {
    position: 'relative',
    paddingVertical: 9, 
    fontSize: 16, 
    color: '#FFFFFF'
  },
  newButton2: { 
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    
  }, 
  newButtonText2: {
    position: 'relative', 
    fontSize: 16, 
    color: '#4AC29A',
  }
});
