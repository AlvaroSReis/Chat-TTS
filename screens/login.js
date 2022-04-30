import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

//import auth from '../services/firebase.js'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Usuário</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Usuário'
          autoCorrect={false}
        />
        <View>
          <Text style={styles.label}>Destinatário</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Destinatário'
          autoCorrect={false}
        />
        <TouchableOpacity
          //onPress={() = }
          onPress={() => this.props.navigation.navigate('Chat')}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Enviar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  label: {
    fontSize: 24
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1010a0',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    bottom: 0
  },
  btn: {
    width: '80%',
    backgroundColor: '#204cfa',
    height: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },
  btnTxt: {
    color: '#ffffff',
    fontSize: 20
  }

})
