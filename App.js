import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

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
          { uri: "https://img.freepik.com/premium-photo/red-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26555.jpg?w=2000" }
        }
      />
      <Text>{'\n'}BY Download Image below use by "Source with requrie" </Text>
      <Image
        source={require('./assets/car2.jpg')}
        style={
          { width: 300, height: 200, resizeMode: 'contain' }
        } //without size picture will not preview
      />

      <TextInput
        secureTextEntry="true" // for password={true} both work
        placeholder='Enter Value'
        keyboardType='email-address'
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
      {/* <Button title={"Click me"} onPress={() => alert("Hello")} /> */}
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnText} onPress={() => alert("Hello")} >Click ME</Text>
      </TouchableOpacity>

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
  btn: {
    backgroundColor: "red",
    width: "20%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontWeight: "bold",
    color: "white",

  }

});
