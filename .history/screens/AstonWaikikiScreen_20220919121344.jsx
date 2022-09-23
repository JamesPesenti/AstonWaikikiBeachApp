import { ImageBackground, Image, Dimensions, View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState } from "react"
import cocoData from '../assets/data/cocoData';
import hotelData from '../assets/data/hotelData';
import CocoList from "../CocoList"



const WIDTH = Dimensions.get('screen').width;


function AstonWaikikiScreen() {
  const [coco, setCoco] = useState(cocoData)
  return (
    <>
    <ImageBackground 
            imageStyle={{opacity: 0.05}}
            style={styles.image}
            resizeMode="cover"
            source={{uri: "https://st4.depositphotos.com/2518409/26472/v/1600/depositphotos_264720914-stock-illustration-seamless-pattern-background-with-tropical.jpg"}}>
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.overlayView} />
            <Text style={styles.headerText}>About Aston Waikiki Beach Hotel</Text>
            <Image style={{ borderWidth: 1, borderColor: "#78b38a", borderRadius: 20, width: 350, height: 200}} source={{uri: "https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_992,q_auto,w_992/v1591929416/sztodlst7oiqcnumgygp.jpg"}} />
          <View style={styles.card2}>
              <Text style={styles.aboutAston}>Situated on the quiet Diamond Head side of Waikiki, our hotel offers stunning room views and a host of amenities. We are just a short stroll to Kapahulu Avenue, which is lined with unique eateries. We are also within walking distance to the Honolulu Zoo, Waikiki Aquarium, and Kapiolani Park.</Text>
          </View>
      
          <Text style={styles.headerText}> The Coconut Club</Text>
          <Text style={styles.descriptionText}> Breakfast Above the Beach with 180 degrees of panoramic ocean views</Text>
          <View style={styles.sliderContainer}>
            
          </View> 

          <ScrollView>
            <View style={styles.container}>
                <ScrollView horizontal={true} style={{flexDirection: "row"}}>
                <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://i.pinimg.com/originals/c1/6d/05/c16d0572ebc8158765c56edfa4e4f120.jpg")}} />
                <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://static.greatbigcanvas.com/images/singlecanvas_thick_none/getty-images/street-in-honolulu-hawaii,2135210.jpg")}} />
                <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.pbs.org/wgbh/americanexperience/media/gallery_images/Massie-gallery-2.jpg")}} />
                <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/swh-31239_0-1024x683.jpg")}} />
                <Image style={{flexDirection: "row", width: 250, height: 285, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://www.thesportsman.com/media/images/admin/swimming/GettyImages-1033401596jpg1.jpg")}} />
                </ScrollView>
            </View>
        </ScrollView>



          <View style={{padding: 20, marginTop: -120, marginBottom: 20 }}>
            <Text style={styles.descriptionText}>Offering a delightful rotating selection of healthy and hearty breakfast options which range from acai bowls and yogurt parfaits to Macadamia Nut pancakes, Kalua Pork Eggs benedict and more. Whole fruit, juices, coffee and a selection of teas.</Text>
            <Text style={styles.descriptionText}>Hours: Breakfast 7 am - 10am. Also open for private events. Contact our Sales team for details.</Text>
            <Text style={{letterSpacing: 1, color: "#78b38a", textAlign: "center", fontWeight: "700", fontSize: 14, marginTop: 60, marginBottom: -40,}}>*Hours of operation, menu items, and beverage options subject to availability and may change at any time without notice.</Text>
          </View>
          <Text style={styles.poolText}>Pool Area & Amenities</Text>
          <Text style={styles.descriptionText}>Take a dip in our heated pool and indulge in Dole Whip at our poolside Surf Shack.</Text>
   
            <View style={styles.sliderContainer}>
                
            </View> 
          </View>
    </ScrollView>
    </ImageBackground>  
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