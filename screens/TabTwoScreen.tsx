import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput style={styles.input}
      placeholder="Mensagem"
      autoCorrect={false}
    />
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
    borderRadius: 10,
    borderColor: '#00400d',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    position: 'absolute',
    bottom: 0
  },
});
