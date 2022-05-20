import * as React from 'react';
import { Component } from 'react';
import {FC, useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
//import api from '../services/api';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function Cadastro(Component) {
    const [nome, setNome] = useState<String>('');
    const [sobrenome, setSobrenome] = useState<String>('');
    const [username, setUsername] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [senha, setSenha] = useState<String>('');
  
    return (
      <View style={styles.container}>
         <View style={styles.label}>
          <Text style={styles.TopText}>Cadastro</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Nome</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={(Nome => setNome(Nome))}
        />
        <View style={styles.label}>
          <Text style={styles.labelText}>Sobrenome</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={(sobrenome => setSobrenome(sobrenome))}
        />
        <View style={styles.label}>
          <Text style={styles.labelText}>Username</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCorrect={false}
          onChangeText={(username => setUsername(username))}
        />
         <View style={styles.label}>
          <Text style={styles.labelText}>Email</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          keyboardType= 'email-address'
          onChangeText={(email => setEmail(email))}
        />
  
        <View style={styles.label}>
          <Text style={styles.labelText}>Senha</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(senha => setSenha(senha))}
          secureTextEntry={true}
          
        />
  
        <TouchableOpacity  style={styles.btnLogin} 
        /*onPress = {() => 
          api.post('/novoUsuario', {
            nome: nome,
            sobrenome: sobrenome,
            username: username,
            email: email,
            senha: senha
          }) 
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          Alert.alert('Cadastro Realizado')
          } 
          
        } */>
          
          <Text style={styles.loginText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#000000',
      backgroundColor: '#FFFFFF',
      fontSize: 17,
      marginTop: 10,
      marginBottom: 30,
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25
    },
  
    label: {
      width: '90%',
      paddingLeft: 25,
      marginBottom: -10
    },
  
    labelText: {
      fontSize: 24,
      color: '#00cc3d',
      opacity: 0.5
    },
    TopText: {
      fontSize: 50,
      color: '#00cc3d',
      opacity: 0.5,
      alignItems: 'center'
    },
  
  
    btnLogin: {
      width: '80%',
      backgroundColor: '#00cc3d',
      height: 45,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25
    },
  
    btnForgetPassword: {
      width: '60%',
      backgroundColor: '#00cc3d',
      height: 35,
      marginBottom: 27,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25
    },
    loginText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 15.75,
      lineHeight: 24,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 20, // usar styles components
      color: '#fff'
    },
  });