import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

const socket = io("http://cdfc-168-227-74-92.ngrok.io"); // replace with the IP of your server, when testing on real devices



export default class App extends Component {
  constructor(props) {
    super(props);
    this.typing = {
      chatMessage: "placeholder"
    },
    this.state = {
      connected: socket.connected,
      currentTransport: socket.connected ? socket.io.engine.transport.name : '-',
      lastMessage: ""
    };
    var messages = [...messages, message];
    var message = {
      name: "",
      message: ""
    };
    var textbox = ""
  }

  componentDidMount() {
    socket.on('connection', () => this.onConnectionStateUpdate());
  }

  componentWillUnmount() {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('message');
  }

  onConnectionStateUpdate() {
    this.setState({
      connected: socket.connected,
      currentTransport: socket.connected ? socket.io.engine.transport.name : '-'
    });
    if (socket.connected) {
      socket.io.engine.on('upgrade', () => this.onUpgrade());
    } else {
      socket.io.engine.off('upgrade');
    }
  }

  chatmessageUpdate (){

  }

  onMessage(content) {
    this.setState({
      lastMessage: content
    });
  }

  onUpgrade() {
    this.setState({
      currentTransport: socket.io.engine.transport.name
    });
  }

  handlechange(event){
    this.setState(textbox = event.target)
  }
  sendMessage(data){
    console.log(data)
    socket.emit('message', data)
  }

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          ref={ref => scrollView = ref}
          onContentSizeChange={() => scrollView.scrollToEnd({ animated: true })}>
          {this.messages?.map((message, index) => <Text style={{ padding: 10, fontSize: 24, backgroundColor: index % 2 ? '#ddd' : '#fff' }} key={message.name} >{message.name} diz: {message.msg}</Text>)}
        </ScrollView>
        <View style={styles.bottomView}>
          <TextInput
            style={styles.txtInput}
            placeholder = "Digite..."
            onChangeText={(text) => this.chatMessage = text}
          />
          <TouchableOpacity
            onPress={() => this.sendMessage(this.chatMessage)}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomView: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 20
  },

  txtInput: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#204cfa'
  },

  btnTxt: {
    color: '#fff'
  }
});

