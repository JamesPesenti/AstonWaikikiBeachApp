import { ScrollView, View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import { useState } from "react"
import exploreData from "../assets/data/exploreData"
import cultureData from "../assets/data/cultureData"
import ExploreList from "../ExploreList"
import CultureList from "../CultureList"

const WIDTH = Dimensions.get('screen').width;

function ExploreScreen() {
  const [explore, setExplore] = useState(exploreData)
  const [culture, setCulture] = useState(cultureData)

  return (
  <>
  <ImageBackground 
            imageStyle={{opacity: 0.05}}
            style={{width: WIDTH}}
            resizeMode="cover"
            source={{uri: "https://st4.depositphotos.com/2518409/26472/v/1600/depositphotos_264720914-stock-illustration-seamless-pattern-background-with-tropical.jpg"}}>
  <ScrollView>
      <Image style={{ resizeMode: "cover", borderRadius: 15, width: "100%", height: 250}} source={{uri: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1299864651/image_1299864651.jpg?io=getty-c-w1280"}} />
      <Text style={styles.header}>Explore</Text>
      <Text style={styles.headerUnder}>Waikiki - Honolulu & Oahu!</Text>

      <View style={styles.container}>
        <View style={styles.diamondCard}>
          <Image style={{ marginTop: -25, resizeMode: "cover", borderRadius: 25, width: "100%", height: 220}} source={{uri: "https://loveoahu.org/wp-content/uploads/diamond-head-1.jpg"}}/>
          <Text style={styles.diamondTitleText}>Diamond Head</Text>
          <View style={{ overflowHidden: "true", padding: 10, width: 280, borderWidth: 2, borderColor: "white", borderRadius: 15}}>
              <Text style={styles.diamondText}>Diamond Head is a volcanic tuff cone in Honolulu and known in hawaiian as Lēʻahi. Enjoy amazing views and sunsets on your climb to the top!</Text>
          </View>
        </View>
      <View style={styles.hanaumaCard}>
          <Image style={{ marginTop: -30, resizeMode: "cover", borderRadius: 15, width: "100%", height: 220}} source={{uri: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://xdaysiny.com/wp-content/uploads/2017/07/Hanauma-Bay-Oahu-Hawaii.jpg"}}/>
            <Text style={styles.diamondTitleText}>Hanauma Bay Snorkeling</Text>
          <View style={{ marginBottom: 40, overflowHidden: "true", padding: 10, width: 280, borderWidth: 1, borderColor: "#78b38a", borderRadius: 15}}>
             <Text style={styles.diamondText}>Snorkel with some of the most colorful fish in the Pacific at Hanauma Bay, a well-known state park revered for its fantastic sightseeing under the sea. The entrance is located on the southeast tip of East Honolulu and costs $25 to enter</Text>
          </View>
      </View>
   <View style={styles.lanikaiCard}>
     <Image style={{ marginTop: -80, resizeMode: "cover", borderRadius: 15, width: "100%", height: 240}} source={{uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f4/fc/a6/caption.jpg?w=500&h=400&s=1"}}/>
     <Text style={styles.diamondTitleText}>Lanikai Beach Kayaking to Mokulua Islands</Text>
     <View style={{ overflowHidden: "true", padding: 10, width: 280, borderWidth: 2, borderColor: "white", borderRadius: 15 }}>
             <Text style={styles.diamondText}>Kayak through sea turtle feeding grounds, sea bird sanctuaries & living coral reefs from the crystal clear waters of Lanikai Beach</Text>
     </View>
   </View>
   <View style={styles.kualoaCard}>
     <Image style={{ marginTop: -40, resizeMode: "cover", borderRadius: 20, width: "100%", height: 200}} source={{uri: "https://thegoldenhouradventurer.com/wp-content/uploads/2021/03/Jurassic-Park-1.jpg"}}/>
     <Text style={styles.diamondTitleText}>Kualoa Ranch Movie Tour</Text>
     <View style={{ overflowHidden: "true", padding: 10, width: 280, borderWidth: 1, borderColor: "#78b38a", borderRadius: 20 }}>
             <Text style={styles.diamondText}>Hollywood’s “backlot of Hawaii”, Kualoa Ranch has served as filming locations for several movies and TV shows, including Jurassic Park, Jurassic World, Hawaii Five-0, LOST, Kong: Skull Island, and Jumanji: Welcome to the Jungle. </Text>
     </View>
   </View>
   <View style={styles.doleCard}>
     <Image style={{ marginTop: 50, resizeMode: "cover", borderRadius: 15, width: "100%", height: 220}} source={{uri: "http://www.onlyinyourstate.com/wp-content/uploads/2017/07/3753439312_3cd37698de_b.jpg"}}/>
     <Text style={styles.diamondTitleText}>Dole Pineapple Plantation</Text>
     <View style={{ overflowHidden: "true", padding: 10, width: 280, borderWidth: 2, borderColor: "white", borderRadius: 15}}>
             <Text style={styles.diamondText}>Historic pineapple plantation features the world's largest pineapple shaped maze, a garden with native plants and a train ride  </Text>
     </View>
   </View>
   <View style={styles.polyCard}>
     <Image style={{ marginTop: 50, resizeMode: "cover", borderRadius: 15, width: "100%", height: 200}} source={{uri: "https://www.gohawaii.cn/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/polynesian-cultural-center_lg.jpg?itok=W0JR5XPu"}}/>
     <Text style={styles.diamondTitleText}>Polynesian Cultural Center & Luau</Text>
     <View style={{ overflowHidden: "true", padding: 10, width: 280, borderWidth: 1, borderColor: "#78b38a", borderRadius: 15}}>
             <Text style={styles.diamondText}>A living museum dedicated to polynesian culture located on Oahu's north shore. Take a scenic cruise with a guide that shares all of the islands history before enjoying kailua pork during a luau. </Text>
     </View>
   </View>
</View>
    <Text style={styles.hikingHeader}>Best Hiking on Oahu</Text>
        <ExploreList 
          data={exploreData}
          explore={explore}
        />
    <Text style={styles.cultureHeader}>Cultural Activities</Text>
    <Text style={styles.cultureText}>Discover Hawaii’s unique and diverse culture through museums, memorials, cuisine and a variety of tours that will enrich your visit to the islands even more.</Text>
        <CultureList 
          data={cultureData}
          culture={culture}
        />
    </ScrollView>
    </ImageBackground>
  </>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  header: {
    marginLeft: 0,
    opacity: 1, 
    letterSpacing: 4,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: "#78b38a",
    marginBottom: 20,
    padding: 30,
},
  headerUnder: {
    opacity: 1, 
    letterSpacing: 3,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: "#78b38a",
    marginBottom: 20,
    marginRight: 5,
    padding: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 5,
    marginTop: 55
},
diamondCard: {
    backgroundColor: "#e1f0e6",
    height: 400,
    width: 280,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: "transparent",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: -50,
    marginBottom: 40,
    marginRight: 75,
},
diamondTitleText: {
  letterSpacing: 2,
  fontSize: 18,
  color: "#78b38a",
  textAlign: "center",
  fontWeight: "700",
  marginTop: 20,
  marginBottom: 10
},
diamondText: {
  letterSpacing: 1,
  color: "#78b38a",
  textAlign: "center",
  fontWeight: "700",
  margin: 0
},

hanaumaCard: {
  backgroundColor: "#e1f0eb",
  height: 345,
  width: 280,
  borderRadius: 10,
  borderWidth: .5,
  borderColor: "transparent",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBottom: 0,
  marginBottom: 40,
  marginLeft: 65,
},
hanaumaTitleText: {
  letterSpacing: 2,
  fontSize: 18,
  color: "#78b38a",
  textAlign: "center",
  fontWeight: "700",
  marginBottom: 10
},
hanaumaText: {
  letterSpacing: 1,
  color: "#78b38a",
  textAlign: "center",
  fontWeight: "700",
  margin: 5
},
lanikaiCard: {
  backgroundColor: "#e1f0eb",
  height: 370,
  width: 280,
  borderRadius: 10,
  borderWidth: .5,
  borderColor: "transparent",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBottom: 0,
  marginBottom: 50,
  marginRight: 75,
},
kualoaCard: {
  backgroundColor: "#e1f0eb",
  height: 380,
  width: 280,
  borderRadius: 10,
  borderWidth: .5,
  borderColor: "transparent",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBottom: 0,
  marginBottom: 60,
  marginLeft: 65,
},
doleCard: {
  backgroundColor: "#e1f0eb",
  height: 300,
  width: 280,
  borderRadius: 10,
  borderWidth: .5,
  borderColor: "transparent",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBottom: 0,
  marginBottom: 50,
  marginRight: 75,
},
polyCard: {
  backgroundColor: "#e1f0eb",
  height: 460,
  width: 280,
  borderRadius: 10,
  borderWidth: .5,
  borderColor: "transparent",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBottom: 0,
  marginBottom: 100,
  marginLeft: 65,
},
hikingHeader: {
  opacity: 1, 
  letterSpacing: 4,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "900",
  color: "#78b38a",
  marginTop: 80,
  marginRight: 0,
  padding: 0,
},
cultureHeader: {
  opacity: 1, 
  letterSpacing: 4,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "900",
  color: "#78b38a",
  marginTop: 80,
  marginRight: 0,
  padding: 0,
},
cultureText: {
  opacity: 1, 
  letterSpacing: 3,
  textAlign: "center",
  fontSize: 18,
  fontWeight: "900",
  color: "#78b38a",
  marginTop: 80,
  marginRight: 0,
  padding: 20,
},
})






