import { ImageBackground, Dimensions, ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function CheckInScreen() {

  return (
  <>
  <ScrollView>
      <ImageBackground 
            blurRadius={2} 
            imageStyle={{opacity: .2}}
            style={{width: WIDTH, height: HEIGHT}}
            resizeMode="cover"
            source={{uri: ("https://st.depositphotos.com/2068033/3720/v/600/depositphotos_37206469-stock-illustration-hawaiian-aloha-shirt-background.jpg")}}
            >
      <ScrollView>
        <View style={styles.container}>     
        <View style={styles.checkInCard}>
        <Icon
          style={{margin: 0}}
          name="key"
          color="white"
          size={50}
            />
          {/* <Image style={{ marginTop: 0, resizeMode: "contain", borderRadius: 800, width: 200, height: 200}} source={{uri: "https://loveoahu.org/wp-content/uploads/diamond-head-1.jpg"}}/> */}
        </View>
          <View style={{ overflowHidden: "true", marginTop: 10, padding: 10, width: 280, borderWidth: 1, borderColor: "#78b38a", borderRadius: 15}}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ textAlign: "center", letterSpacing: .8, fontSize: 16, fontWeight: "900", color: "#78b38a"}}>Room Key Card</Text>
            </TouchableOpacity>
          </View>
        <Text style={{ padding: 20, textAlign: "center", letterSpacing: .8, fontSize: 16, fontWeight: "900", color: "#78b38a"}}>Put your phone next to the lock to open the door.</Text>
          <Text style={{ padding: 20, textAlign: "center", letterSpacing: .8, fontSize: 16, fontWeight: "900", color: "#78b38a"}}>You can use your digital key whenever your app is open</Text>
        </View>
        
        </ScrollView>
      </ImageBackground>
      </ScrollView>
  </>
  )
}

export default CheckInScreen

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    opacity: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    width: "100%",
    height: HEIGHT,
  },
checkInCard: {
    backgroundColor: "#78b38a",
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: -50,
    marginTop: 50,
},
})




