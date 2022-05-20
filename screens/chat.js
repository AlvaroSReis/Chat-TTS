import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'

import socket from '../services/service.js'


export default class Chat extends Component {
  constructor (props) {
    super(props)
    ;(this.message_state = {
      chatMessage: '',
      chatMessages: []
    }),
      (this.state = {
        connected: socket.connected,
        currentTransport: socket.connected
          ? socket.io.engine.transport.name
          : '-',
        lastMessage: ''
      })
    this.clear_textimput = {
      text: ''
    }
  }

  componentDidMount () {
    socket.on('connection', () => this.onConnectionStateUpdate())
    socket.on('message', msg => {
      this.message_state.chatMessages.push(msg)
      this.updateChat()
    })
  }

  componentWillUnmount () {
    socket.off('connect')
    socket.off('disconnect')
    socket.off('message')
  }

  onConnectionStateUpdate () {
    this.setState({
      connected: socket.connected,
      currentTransport: socket.connected ? socket.io.engine.transport.name : '-'
    })
    if (socket.connected) {
      socket.io.engine.on('upgrade', () => this.onUpgrade())
    } else {
      socket.io.engine.off('upgrade')
    }
  }

  onMessage (content) {
    this.setState({
      lastMessage: content
    })
  }

  onUpgrade () {
    this.setState({
      currentTransport: socket.io.engine.transport.name
    })
  }

  updateChat () {
    this.setState(this.message_state.chatMessages)
  }

  sendMessage (data) {
    socket.emit('message', data)
    this.chatMessage = ''
  }

  render () {
    const chatMessages = this.message_state.chatMessages.map(chatMessage => (
      <Text
        onValueChange={{}}
        style={{ padding: 10, fontSize: 24 }}
        key={chatMessage}
      >
        {chatMessage}
      </Text>
    ))
    return (
      <>
        <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
        <SafeAreaView style={styles.container}>
          <ScrollView>{chatMessages}</ScrollView>
          <View style={styles.bottomView}>
            <TextInput
              style={styles.txtInput}
              placeholder='Digite...'
              onChangeText={text => (this.chatMessage = text)}
              //onChangeText={(text) => this.setState({text})}
              //value = {this.clear_textimput.text}
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
    )
  }
}

/*

const Index = ({ username }) => {
  const [value, setValue] = useState('');
  const [num, setNum] = useState(0);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    let skt = io('http://192.168.15.13:3000/')
    setSocket(skt);

  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('msg', (data, name) => {
        let temp = messages;
        temp.push({ msg: data, name: name })
        setMessages([...temp])

      })

      socket.on('connected', data => {
        setNum(String(data))
      })

      socket.on('disconnect', data => {
        setNum(String(data))
      })

      socket.on('types', () => {
        setTyping(true)
      })

      socket.on('blur', () => {
        setTyping(false)
      })
    }


  }, [socket])

  useEffect(() => {
    console.log('messages')
    console.log(messages)
  }, [messages])


  function handleSend() {
    socket.emit('msg', value, username)
    setValue('');
  }

  function handleTyping() {
    socket.emit('types')
  }

  function handleBlur() {
    socket.emit('blur')
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          ref={ref => scrollView = ref}
          onContentSizeChange={() => scrollView.scrollToEnd({ animated: true })}>
          {messages?.map((msg, index) => <Text style={{ padding: 10, fontSize: 24, backgroundColor: index % 2 ? '#ddd' : '#fff' }} key={msg.name} >{msg.name} diz: {msg.msg}</Text>)}
        </ScrollView>
        {typing ? <Text style={{ color: 'grey', fontSize: 18 }}>Usuário digitando...</Text> : <View></View>}
        <Text style={{ alignSelf: 'flex-end', paddingRight: 20}}>{num} usuários online</Text>
        <View style={styles.bottomView}>
          <TextInput
            onFocus={() => handleTyping()}
            onBlur={() => handleBlur()}
            style={styles.txtInput}
            placeholder='Digite algo...'
            onChangeText={text => setValue(text)}
            value={value}

          />
          <TouchableOpacity
            onPress={() => handleSend()}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  bottomView: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 20
  },

  txtInput: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10
  },

  btn: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#204cfa'
  },

  btnTxt: {
    color: '#fff'
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
