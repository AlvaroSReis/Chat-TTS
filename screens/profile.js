import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Button
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

//import auth from '../services/firebase.js'

//WebBrowser.maybeCompleteAuthSession();
WebBrowser.mayInitWithUrlAsync();

export default function Profile(Component) {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "826522083669-rbghqdiv59brajgrnrp3af0ojrrf2l78.apps.googleusercontent.com",
    expoClientId: "826522083669-na8ug9f6mmnu4k4vqi8lr44ljroctoub.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      console.log("sucess")
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {showUserInfo()}
      <Button
        title={accessToken ? "Dados do Usuário" : "Login"}
        onPress={accessToken ? getUserData : () => { promptAsync({ showInRecents: true}) }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


/*
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
          placeholder='chat'
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

*/

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
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 70,
    height: 70
  }
});
