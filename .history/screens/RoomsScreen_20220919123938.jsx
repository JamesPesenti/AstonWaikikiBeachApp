import { View, ScrollView, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { useState } from "react"
import roomsData from "../assets/data/roomsData"
import RoomsList from "../RoomsList"
import Amenities from "../components/Amenities"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons"

// {
//   day: 1,     
//   month: 1,    // month of year (1-12)
//   year: 2022,  // year
//   timestamp,   // UTC timestamp representing 00:00 AM of this date
//   dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
// }


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function RoomsScreen() {
  const [rooms, setRooms] = useState(roomsData)
  return (
  <>
  <ImageBackground 
            imageStyle={{opacity: .2}}
            style={styles.image}
            resizeMode="cover"
            source={{uri: "https://assets.muralswallpaper.com/hi-res/TR5041NE04W.jpg"}}
  >
  <ScrollView style={{overflowHidden: "true"}}>
  
  <View style={styles.container}>
  <View style={styles.overlayView} />
    <Text style={styles.titleText}>Rooms & Suites</Text>
    <View>
    {/* <Calendar
      horizontal={true}
      initialDate={'2022-07-12'}
      minDate={'2022-07-12'}
      maxDate={'2023-05-30'}
      enableSwipeMonths={true}
      hideArrows={true}
      style={{
        backgroundColor: "#78b38a",
        borderRadius: 12,
        height: 380,
        opacity: .8,
      }}
     /> */}
     </View>


    <Text style={styles.descriptionText}>Live the aloha lifestyle and relax in any one of our comfortable guest rooms or spacious suites. </Text>
      
          <RoomsList
            data={roomsData}
            rooms={rooms}
          />
          <Amenities />
    </View>
  </ScrollView>
  </ImageBackground>
  
  </>
  )
}

export default RoomsScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: 40,
  },
  titleText: {
    letterSpacing: 5,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "300",
    color: "#78b38a",
    marginTop: 30,
    padding: 0,
  },
  descriptionText: {
    letterSpacing: 1,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 100,
    marginBottom: 50,
    paddingBottom: 50,
  },
  image: {
    opacity: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  overlayView: {
    opacity: 1,
    // height: "100%",
    // width: "100%",
    position: 'absolute',
  }
})