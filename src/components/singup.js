import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
import firebase from 'react-native-firebase';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../resize.png')} />
        <Text style={styles.text} > SIHA<Text style={styles.textBold} >TI</Text> </Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}

        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          //onChangeText={email => this.setState({ email })}
          //value={this.state.email}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Phone"
          autoCapitalize="none"
          style={styles.textInput}
          //onChangeText={email => this.setState({ email })}
          //value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleSignUp} style={styles.newButton} >
         <Text style={styles.newButtonText} > S'inscrire </Text> 
         </TouchableOpacity>
        
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.newButton2} >
         <Text style={styles.newButtonText2} >Vous avez déjà un compte ? Se connecter</Text> 
         </TouchableOpacity>

        {/*<Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
      />*/}
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
    color: '#4AC29A'
  }
});
