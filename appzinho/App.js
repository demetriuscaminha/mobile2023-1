import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, Alert } from 'react-native';


export default function App() {
  const text = 'Campo Input';
  return (
    <View style={styles.container}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      <Text style={styles.appTitle}>Hello World!</Text>
      <Text style={styles.typeTextPrimary}>Aluno: Demetrius Caminha</Text>
      <Text>Sala 102</Text>
      <Text style={styles.appTitle}>Efetuar Login</Text>
      <SafeAreaView>
        <TextInput
          style={styles.inputField}
          value={text}
        />
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
        />
        <Button
          title="Enviar Alerta"
          onPress={() => Alert.alert('Exemplo de alerta!')}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 28,
    color: 'red',
    textAlign: 'center'
  },
  typeTextPrimary: {
    textTransform: 'uppercase',
    color: 'white',
    backgroundColor:'#000',
    padding: 10,
    fontWeight: 'bold',
    margin: 20,
    borderRadius: 10,
    transform: 'rotate(180deg)'
  },
  inputField: {
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginTop: 15
  }
});
