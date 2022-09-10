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
      <ScrollView style={{marginTop: 15, paddingBottom: -100}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://2.bp.blogspot.com/-WWB2rUGlwC4/WuQ9KwWnH5I/AAAAAAABYbI/zb3qHNrfnQcXBQrjAkkEp1oY3grnxiqlQCLcBGAs/s640/Waikiki%2BTown%252C%2BHawaii%2Bin%2Bthe%2B1950s%2B%252818%2529.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://i.redd.it/z7ms75tfsxq21.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://i.pinimg.com/originals/99/1a/55/991a55fe32b01cdc5a3350d64aac5fd0.jpg")}} />
          <Image style={{flexDirection: "row", resizeMode: "contain", width: 260, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://live.staticflickr.com/2859/9270167931_194262f928_b.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://mallmaverick.imgix.net/web/property_managers/1/properties/705/all/20191016002914/Level_2_-_The_Crafts_of_International_Market_Place.jpg")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://imageio.forbes.com/blogs-images/forbestravelguide/files/2017/04/Forbes-OahusNewLuxuryNeighborhood-InternationalMarketPlaceExterior-InternationalMarketPlace.jpg?height=400&width=711&fit=bounds")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/84/be/08/royal-hawaiian-center.jpg?w=1200&h=-1&s=1")}} />
          <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://www.festivalcos.com/wp-content/uploads/2020/07/royal-hawaiian-center-012.jpg")}} />
        </ScrollView>
        <View style={{margin: -5, paddingBottom: 10}}>
          <Text style={styles.descriptionText}>The 1950s ushered in a building boom for waikiki, just as the Islands were about to become the 50th U.S. state in 1959. In 1957, the International Market Place, designed by noted Island architect Pete Wimberly opened as a delightful mix of bars, shops and eateries.</Text>
          <Text style={styles.descriptionText}>The original International Market Place closed in 2013. Three years later in 2016, a reimagined International Market Place opened. The beloved ancient banyan tree that had been central to the original market was carefully preserved and incorporated into the design of the sprawling new center.  </Text>
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
        imageStyle={{opacity: 1, borderRadius: 50, borderWidth: .5, borderColor: "white"}}
        style={{width: 200, height: 200}}
        resizeMode="cover"
        source={{uri:"https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.honolulumagazine.com/content/uploads/data-import/15e3d234/then-and-now-history-honolulu-old-waikiki-cover.jpg"}}
        >
  
          <Text style={{marginTop: 100, color: "white", textAlign: "center", fontWeight: "700", letterSpacing: 1}}>Waikiki</Text>
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
        alignItems: "center" 
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
      openView: {
        backgroundColor: "black",
        width: "90%",
        height: "40%",
        borderRadius: 15,
        padding: 40,
        margin: 10,
        elevation: 3.3
      },
      button: {
        borderRadius: 50,
        padding: 15,
        elevation: 2
      },
      buttonCard: {
        padding: 0,
        marginLeft: 140,
      
        backgroundColor: "#ffff",
      },
      buttonClose: {
        backgroundColor: "#bae6a1",
        marginHorizontal: 80,
        marginBottom: -20,
        marginTop: 20,
      },
      descriptionText: {
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
        margin: 10,
        marginBottom: 0,
        paddingBottom: 0,
      },
    
})


