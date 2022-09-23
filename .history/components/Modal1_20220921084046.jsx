import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, ImageBackground, Image, Dimensions } from "react-native";
import Video1 from '../UI/Video1';
import BackgroundImage from "../components/ImageBackground"


const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

function WelcomeModal() {


const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <View style={styles.centeredView}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
    <ScrollView>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <ScrollView style={{marginTop: 5, paddingBottom: -100}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://i.pinimg.com/originals/c1/6d/05/c16d0572ebc8158765c56edfa4e4f120.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://static.greatbigcanvas.com/images/singlecanvas_thick_none/getty-images/street-in-honolulu-hawaii,2135210.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.pbs.org/wgbh/americanexperience/media/gallery_images/Massie-gallery-2.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/swh-31239_0-1024x683.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://www.thesportsman.com/media/images/admin/swimming/GettyImages-1033401596jpg1.jpg")}} />
        </ScrollView>
        <View style={{ margin: -10, paddingBottom: 15}}>
          <Text style={styles.descriptionText}>Waikiki means “spouting water” in Hawaiian. It was once a more tranquil area dotted with humble bungalows and beach houses, far from the bustle of Honolulu. The world began to take notice of Waikiki as a vacation destination when world-class hotels opened in the early 1900's.</Text>
          <Text style={styles.descriptionText}>Starting in the 1920s, a group of young men called “beach boys” assisted visitors in learning how to surf and use outrigger canoes off Waikiki. Two clubs formed, the Outrigger Canoe Club and the Hui Nalu, both consisting of some of Hawaii’s and the world’s finest watermen. The most famous of those beach boys is Duke Kahanamoku, who was also an Olympic athlete and is considered the father of modern surfing.</Text>
          {/* <Text style={styles.modalText}>The 1950s ushered in a building boom for Hawaii, just as the Islands were about to become the 50th U.S. state in 1959. In 1955, the Sheraton Princess Kaiulani opened. It was built on the former estate that once housed the hotel’s namesake, Princess Victoria Kaiulani. The hotel project was the largest since the Royal Hawaiian was built 28 years earlier in 1927. Two years later in 1957, the International Market Place, designed by noted Island architect Pete Wimberly, opened next door, offering a delightful mix of bars, shops and eateries.</Text> */}
          
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={{color: "#78b38a", textAlign: "center", fontWeight: "700", letterSpacing: 1}}>Close</Text>
          </Pressable>
        </View>
      </View>
      </View>
      </ScrollView>
    </Modal>

    <Pressable
      style={[styles.button, styles.buttonCard]}
      onPress={() => setModalVisible(true)}>
  
      <ImageBackground
        imageStyle={{opacity: .8, borderRadius: 50, borderWidth: .5, borderColor:"black"}}
        style={{width: 200, height: 200}}
        resizeMode="cover"
        source={{uri:"https://i.redd.it/wemclz6glrq21.jpg"}}
        >
          <Text style={{opacity: 1, marginTop: 125, color: "white", textAlign: "center", fontSize: 22, fontWeight: "200", letterSpacing: 2}}>Waikiki's History</Text>
          </ImageBackground>
      
    </Pressable>
    </View>
  </>
  )
}

export default WelcomeModal


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        justifyContent: "center",
        backgroundColor: "#fff",
        width: width,
        height: height,
        borderRadius: 45,
        paddingTop: 0,
        marginBottom: 20,
        elevation: 3.3,
        overflow: "visible"
      },
      button: {
        borderRadius: 50,
        padding: 15,
        elevation: 2
      },
      buttonCard: {
        padding: 0,
        marginRight: 140,
        backgroundColor: "#ffff",
      },
      buttonClose: {
        backgroundColor: "#bae6a1",
        marginHorizontal: 80,
        marginBottom: -20,
        marginTop: 20,
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 80
      },
      descriptionText: {
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
        margin: 0,
        marginBottom: 0,
        padding: 12,
        lineHeight: 17,
      },
    
})


