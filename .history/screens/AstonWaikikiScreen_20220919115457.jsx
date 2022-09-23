import { ImageBackground, Image, Dimensions, View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState } from "react"
import CocoList from "../CocoList"
import cocoData from '../assets/data/cocoData';
import hotelData from '../assets/data/hotelData';

import RoomsList from "../RoomsList"
import roomsData from "../assets/data/roomsData"


const WIDTH = Dimensions.get('screen').width;


function AstonWaikikiScreen() {
  const [coco, setCoco] = useState(cocoData)
  const [rooms, setRooms] = useState(roomsData)

  return (
    <>
 
       
            <CocoList 
                data={cocoData}
                coco={coco}
            />

        <RoomsList
            data={roomsData}
            rooms={rooms}
          />
      
   
  </>
  )
}

export default AstonWaikikiScreen

const styles = StyleSheet.create({
  image: {
      width: WIDTH,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden'
  },
  overlayView: {
    opacity: 0.2,
    position: 'absolute',
},
headerText: {
  letterSpacing: 6,
  textAlign: "center",
  fontSize: 22,
  fontWeight: "900",
  color: "#78b38a",
  marginVertical: 60,
},
  aboutAston: {
    padding: 10,
    opacity: 1, 
    letterSpacing: 2,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    color: "#78b38a",
},
card: {
  opacity: .5,
  backgroundColor: "#e8fff4",
  width: "80%",
  height: "5%",
  color: "yellow",
  borderRadius: 15,
  padding: 2,
  marginTop: 200,
  elevation: .3
},
card2: {
  opacity: .8,
  backgroundColor: "#e8fff4",
  width: "90%",
  height: 310,
  color: "yellow",
  borderRadius: 20,
  borderWidth: 4,
  borderColor: "white",
  padding: 25,
  marginTop:40,
  margin: 40,
  elevation: .3
},
  sliderContainer: {
    textAlign: "center",
    position: 'relative',
    flex: 1,
    overflow: "hidden",
    zIndex: 1,
    margin: 40,
    marginTop: 10
},
  descriptionText: {
    letterSpacing: 1.5,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 60,
    marginBottom: -40,
    padding: 10
  },
  poolText: {
    letterSpacing: 6,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
    color: "#78b38a",
    marginTop: 100,
  },
  cocoText: {
    letterSpacing: 1,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    
  },
})