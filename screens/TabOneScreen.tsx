import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [userId, setUserId] = useState(String)
  const [currentMsg, setCurrentMsg] = useState(String)
  const [message, setMessage] = useState([
    { username: 'Sistema', data:'Digite seu nome de usuário e mensagem.'}
  ])
  return (
    <View style ={styles.container_container}>
      <FlatList 
        data = {message}
        contentContainerStyle={{flexGrow: 1, width:'100%', justifyContent: 'flex-start'}}
        renderItem ={({item}) => {
          return(
            <View>
              <Text style ={styles.setFormat}>{item.username}: {item.data}  </Text>
            </View>
        )
      }}>
          
      </FlatList>
    <View style={styles.container}>
      <View>
        <Text style={styles.label} >Usuário</Text>
      </View>
      <TextInput style={styles.input}
        placeholder="Mensagem"
        onChangeText={currentMsg => setCurrentMsg(currentMsg)}
        autoCorrect={false}
      />
      <View style={styles.bottom_area}>

        <TextInput style={styles.username}
          placeholder="Usuário"
          onChangeText={userId => setUserId(userId)}
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.buttom} onPress={() => 
            setMessage(message => [...message,{username: userId, data: currentMsg}])
            }>
          <Text style={styles.label}> Enviar </Text>
          
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0
  },
  setFormat : {
    color: '#000000',
    fontSize: 25,
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
  label: {
    fontSize: 24
  },
  input: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00400d',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    bottom: 0
  },
  username: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00400d',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    bottom: 0
  },
  bottom_area: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginBottom: 0
  },
  buttom: {
    backgroundColor: '#204cfa',
    marginBottom: 27,
    marginTop: 10,
    width: 90,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});
