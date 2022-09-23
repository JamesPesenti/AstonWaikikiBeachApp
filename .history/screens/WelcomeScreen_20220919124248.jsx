import {
    ImageBackground,
    Dimensions,
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
 } from "react-native"
import Video1 from '../UI/Video1';
import Modal1 from "../components/Modal1"
import Modal2 from "../components/Modal2"

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


function WelcomeScreen() {

  return (
    <> 
      <ScrollView >
        <View style={styles.videoContainer}>
            <Video1 />
            <Text style={styles.videoAston}>Aston</Text>
            <Text style={styles.videoWaikiki}>Waikiki Beach</Text>
        </View>
        
      <View style={styles.container}>
        <ImageBackground 
            blurRadius={.1}
            imageStyle={{opacity: 0.1}}
            style={styles.image}
            resizeMode="cover"
            source={{uri:"https://st.depositphotos.com/2068033/3720/v/600/depositphotos_37206469-stock-illustration-hawaiian-aloha-shirt-background.jpg"
          }}>
        <View style={styles.overlayView} />
          <View style={styles.modalContainer}>
                <Text style={styles.headerText1}>Aloha</Text>
                <Text style={styles.headerText1}>Welcome To Waikiki!</Text>
              
                  <View style={styles.card1}>
                    <ImageBackground 
                      imageStyle={{opacity: .1, borderRadius: 15, height: "100%", width: "100%" }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: "black",}}
                      resizeMode="contain"
                      source={{uri:"https://assets.muralswallpaper.com/hi-res/TR5041NE04W.jpg"}}>
                        <Text style={styles.descriptionText}>Located on the beautiful Diamond Head side of Kalakaua and just steps away from iconic Waikiki Beach, the Aston Waikiki Beach Hotel’s phenomenal location offers ocean facing views from 85% of its guest rooms. </Text>
                    </ImageBackground>
                  </View>
                    <Modal1 />
                    <Modal2 />
              </View>
          </ImageBackground>
      </View>
    </ScrollView>
  </>
  
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height: 1200,
    },
    videoContainer: {
      marginBottom: 20,
      alignSelf: 'center',
      width: 320,
      height: 200,
  },
    videoTitle: {
      color: "white",
      position: 'absolute',
      fontSize: 30, 
      opacity: .9,
      fontWeight: "400", 
      top: 5,
      bottom: 2,
      left: 110,
      bottom: 100,
      letterSpacing: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  videoAston: {
    color: "white",
    position: 'absolute',
    fontSize: 35, 
    opacity: 2,
    fontWeight: "400", 
    bottom: 2,
    left: 110,
    top: 50,
    letterSpacing: 2,
    justifyContent: 'center',
    alignItems: 'center',
},
videoWaikiki: {
  color: "white",
  position: 'absolute',
  fontSize: 25, 
  opacity: 2,
  fontWeight: "400", 
  bottom: 2,
  left: 70,
  top: 90,
  letterSpacing: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
    image: {
      opacity: 1,
      resizeMode: "cover",
      justifyContent: 'center',
      width: "100%",
      height: "100%",
    },
    modalContainer: {
        opacity: 1,
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    headerText1: {
        textDecorationColor: "white",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        opacity: 1, 
        letterSpacing: 4,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "900",
        color: "#78b38a",
        marginBottom: 30,
        padding: 20,
    },
    headerText2: {
        opacity: 1, 
        letterSpacing: 2,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "900",
        color: "#78b38a",
        marginBottom: 50,
        padding: 30,
    },
    descriptionText: {
      opacity: 4, 
      letterSpacing: .8,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      color: "#78b38a",
      marginTop: 60,
      marginRight: 0,
      padding: 5,
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    card1: {
      opacity: 1,
      backgroundColor: "white",
      width: "95%",
      height: "30%",
      borderRadius: 15,
      marginTop: 30,
      elevation: .3
  },
  card2: {
    opacity: 1,
    backgroundColor: "#e8fff4",
    width: "90%",
    height: 440,
    borderRadius: 20,
    borderWidth: 3, 
    borderColor: "white", 
    padding: 5,
    elevation: .3
},
})


