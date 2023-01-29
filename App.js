import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 42, color: "red" }}>Hello World</Text>

      <Text>{'\n'}BY URL Image below use by "Source with URI" </Text>
      <Image
        style={
          { width: 300, height: 200, resizeMode: 'contain' }
        } //without size picture will not preview
        source={
          { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0icqge5K-lfEi9OcA6UUm4o8yUMP3xgnWeZW--UnaKdzshZ5NRePCwvbqRgLwZm466A&usqp=CAU" }
        }
      />
      <Text>{'\n'}BY Download Image below use by "Source with requrie" </Text>
      <Image
        source={require('./assets/car2.jpg')}
        style={
          { width: 300, height: 200, resizeMode: 'contain' }
        } //without size picture will not preview
      />

      <TextInput placeholder='Enter Value'
        onChangeText={(text) => console.log(text)}
        // value='Abid' //by default value
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 1,
          width: "80%",
          backgroundColor: "grey",
          color: "#fff"
        }}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
