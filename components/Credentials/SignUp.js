import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput,TouchableHighlight, Image} from 'react-native';

import Background from '../../assets/Background1.jpg';
import Logo from '../../assets/puglogo.png';
import { Ionicons } from '@expo/vector-icons';

class SignUp extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        confirm: '',
        badEntry: false
    }

    SignUpCheck = () => {
        if (this.state.password == this.state.confirm)
        {
            this.props.navigation.navigate('Login') 
        } else {
            this.setState ({
                badEntry: true
            })
        }
    }

    render() {
        let isConfirmed = this.state.badEntry && { borderColor: 'red', borderBottomColor: 'red', borderWidth: 1 }

        return (
            <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                {/* <Image source = {Logo} style = {{flex: 0.35, marginBottom: 30}}resizeMode="contain"/> */}
                    <View style={styles.inputContainer}>
                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} /> */}
                        <Ionicons style={styles.inputIcon} name="ios-person"></Ionicons>
                        <TextInput style={styles.inputs}
                            placeholder="Username"
                            keyboardType="default"
                            underlineColorAndroid='transparent'
                            onChangeText={(username) => this.setState({ username })} />
                    </View>
                    <View style={styles.inputContainer}>
                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} /> */}
                        <Ionicons style={styles.inputIcon} name="md-mail"></Ionicons>
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(email) => this.setState({ email })} />
                    </View>

                    <View style={[styles.inputContainer, isConfirmed]}>
                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                        <Ionicons style={styles.inputIcon} name="md-key"></Ionicons>
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({ password })} />
                    </View>

                    <View style={[styles.inputContainer, isConfirmed]}>
                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                        <Ionicons style={styles.inputIcon} name="md-key"></Ionicons>
                        <TextInput style={styles.inputs}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(confirm) => this.setState({ confirm })} />
                    </View>
                    {this.state.badEntry && <Text style={{color: 'red', marginBottom: 10}}>Passwords Do Not Match</Text>}


                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>  this.SignUpCheck() }>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
            // {/* <FormLabel>Name</FormLabel>
            // <FormInput />
            // <FormValidationMessage>Error message</FormValidationMessage> */}
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      fontSize: 30,
      marginLeft:15,
      justifyContent: 'center',
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });

export default SignUp;