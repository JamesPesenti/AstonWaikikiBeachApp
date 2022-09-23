import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from "@expo/vector-icons"

const Amenities = () => {
  return (
    <>
        <ScrollView style={{overflowHidden: "true", flex:1}}>
            <Text style={styles.titleText}>Room & Hotel Amenities</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: "row", marginVertical: 30, marginHorizontal: -20, paddingHorizontal: 20, marginLeft: 0, overflowHidden: "true", backgroundColor: "#ebebeb"}}>
            <Ionicons 
              style={{margin: 20, right: 20}}
              name="phone-portrait-outline" 
              color="#78b38a"
              size={30} 
            />
            <Icon
              style={{marginTop: 25, right: 40}}
              name="key"
              color="#78b38a"
              size={25}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 90}}>Mobile Key</Text>
            
            <Icon
              style={{margin: 20, right: 55}}
              name="swimming-pool"
              color="#78b38a"
              size={30}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 130}}>Heated Pool</Text>

            <Icon
              style={{margin: 20, right: 90}}
              name="utensils"
              color="#78b38a"
              size={30}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 155}}>Restaurant</Text>

            <Icon
              style={{margin: 20, right: 130}}
              name="wifi"
              color="#78b38a"
              size={30}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 182}}>Wifi</Text>

             <Ionicons
              style={{margin: 20, marginTop: 16, right: 140}}
              name="cafe-outline"
              color="#78b38a"
              size={40}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 200}}>Keurig</Text>

             <Ionicons
              style={{margin: 20, right: 150}}
              name="barbell-outline"
              color="#78b38a"
              size={35}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 232}}>Fitness Center</Text>

            <Icon
              style={{margin: 20, right: 200}}
              name="tv"
              color="#78b38a"
              size={29}
            />
            <Text style={{color:"#78b38a", marginTop: 50, right: 248}}>TV</Text>

            <Ionicons
               style={{margin: 20, right: 200}}
              name="lock-closed-outline"
              color="#78b38a"
              size={30}
            />
             <Text style={{color:"#78b38a", marginTop: 50, right: 250}}>Safe</Text>

            </ScrollView>
            <Text style={styles.descriptionText}>Step-out balcony Non-smoking Air conditioning Clock radio Keurig® coffeemaker Cable TV Hair dryer Iron/Ironing Board In-room safe High-Speed WiFi Internet Access</Text>
        </ScrollView>
    </>
  )
}

export default Amenities

const styles = StyleSheet.create({
    titleText: {
        letterSpacing: 5,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        color: "#78b38a",
        marginTop: 100,
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

})