import { ImageBackground, ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const image = { uri: 'https://reactjs.org/logo-og.png' };

  return (
    <ScrollView>
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


        <View style={styles.main1}>
          <Text style={styles.text}>
            Header
          </Text>
        </View>

        <View style={styles.main2}>
          <View style={styles.boxes}>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>
            <View style={styles.item}>
              <Text>Item</Text>

            </View>

          </View>
        </View>

        <View style={styles.main3}>
          <Text style={styles.text}>
            Footer
          </Text>
        </View>


        {
          [1, 2, 3, 4].map((v, i) => {
            return (
              <View style={styles.card}>
                <Text style={{ fontSize: 32 }}>{i + 1}.Muhammad Abid</Text>
              </View>
            )
          }
          )
        }



        <FlatList
          data={DATA}
          renderItem={(DATA) => {// jo bhi data ap upper recive krengy wo apko
            return (        //render me mil jayega phir ap usy nichy use kren
              <View style={styles.card}>
                <Text style={{ fontSize: 32 }}>{DATA.item.title}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        />

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.textBack}>Inside</Text>
        </ImageBackground>
      </View >
    </ScrollView>

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

  },
  main1: {
    backgroundColor: "blue",
    width: "100%",
    flex: 1,
    height: 100
  },
  main2: {
    backgroundColor: "green",
    width: "100%",
    flex: 1,
    height: 530,
    justifyContent: "center"


  },
  main3: {
    backgroundColor: "yellow",
    width: "100%",
    flex: 1,
    height: 100

  },
  text: {
    fontSize: 30,
    color: "#fff"
  },
  boxes: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    marginBottom: 10,
    justifyContent: "center"
  },
  card: {
    backgroundColor: "grey",
    width: "80%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",

    // form   react native elevation
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 400,
    justifyContent: 'center',
  },
  textBack: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  }


});
