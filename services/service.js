import io from 'socket.io-client';

const socket = io('https://chat-tts-service.herokuapp.com/');

export default socket;