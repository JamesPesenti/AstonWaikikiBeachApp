import { ImageBackground, View, Text, StyleSheet, Dimensions} from "react-native"


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function BackgroundImage() {
  return (
    <View style={styles.container}>
    <ImageBackground 
      imageStyle={{opacity: 0.2}}
      style={styles.image} 
      resizeMode="cover"
      source={{uri: "https://media.istockphoto.com/vectors/seamless-pattern-with-hawaiian-hibiscus-flower-vector-id538304807?k=20&m=538304807&s=612x612&w=0&h=j9X-SF-SI00kmPNM5BSRdkC8Neoz49oH9aDgttVNX-s="}}>
        <View style={styles.overlayView} />
          {/* <Text style={styles.text}>Check out</Text> */}
    </ImageBackground>
  </View>
  )
}

export default BackgroundImage


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden'
      },
      image: {
        opacity: 1,
        width: WIDTH,
        height: HEIGHT,
        resizeMode: "cover",
        justifyContent: 'center',
      },
      text: {
        opacity: 1,
        top: 50,
        fontWeight: "bold",
        fontSize: 20,
        color: "blue",
        alignSelf: "center",
        justifyContent: 'center',
      },
      overlayView: {
        opacity: 1,
        height: "100%",
        width: "100%",
        position: 'absolute',
    }
})