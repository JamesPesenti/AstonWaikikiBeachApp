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
            source={{uri: "data:image/jpeg;base64,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"}}
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
    fontWeight: "600",
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