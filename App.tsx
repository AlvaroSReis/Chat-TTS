import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import singInGoogle from './firebase.js'

export default function App() {
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
      <Text style={styles.label}>Senha</Text>
    </View>
    <TextInput
      style={styles.input}
      placeholder='Senha'
      autoCorrect={false}
    />
    <TouchableOpacity
      onPress={() => singInGoogle()}
      style={styles.btn}
    >
      <Text style={styles.btnTxt}>Enviar</Text>
    </TouchableOpacity>
  </View>
  );
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
  btnTxt: {
      color: '#ffffff',
      fontSize: 20
  }
})