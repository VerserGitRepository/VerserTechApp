import React, { memo, useState,Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';


const LoginScreen =props => {
  
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });


  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    else
    {
      const UserName = email.value;
      const Password = password.value;
     
        fetch(
          "https://customers.verser.com.au/JMSLoginManager/Login/AuthenticateUser",
          {
            method: "POST",
            cache: "no-cache",
            headers: {
              Accept: "application/json",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({UserName,Password})
          }
        ).then(resp => resp.json())
        .then(function(response) {
          if(response.IsLoggedIn)
          {
            console.log('validated user id');
            props.navigation.navigate('Drawer');
            
          }
          else
          {
            alert("The UserID or Password is Invalid");
            props.navigation.navigate('Login');
            
          }                   
        });         
    }
  };

  

  return (
    <Background>
      

      <Logo />

      <Header color="#F79435">Tech APP</Header>

      <TextInput
        label="UserID"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="name"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />      

      <Button mode="contained" onPress={_onLoginPressed} color="#F79435">
      <Text backgroundColor="#FFFFFF">Login</Text>
      </Button>      
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});


LoginScreen.navigationOptions = {
    headerTitle:"Verser TechApp Login",
    headerTitleAlign:"Center",

    headerStyle:{
        backgroundColor:"#F79435",
    },
    headerTitleStyle: {
        color: 'white'
      }
};

export default LoginScreen;
