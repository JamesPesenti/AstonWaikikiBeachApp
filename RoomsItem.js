import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image, Pressable } from "react-native"
import Images from "./components/Images"



const RoomsItem = ({ item, id }) => {
  return (
    <>
    <ScrollView>
          <View style={styles.container}>
           <View style={styles.card}>
               <ScrollView horizontal={true} style={{flexDirection: "row",}}>
                    <Image 
                        key={id}
                        style={styles.image} 
                        source={{ uri: item.source }}
                    />
                </ScrollView>
            <View style={{overflowHidden: "true", padding: 10, width: 280, borderWidth: 2, borderColor: "white", }}>
                    
                    <Text style={styles.roomText}>{item.type}</Text>
                    <Text style={styles.roomText}>{item.numOfBeds}</Text>
                    <Text style={styles.roomText}>{item.description}</Text>
                    <Text style={styles.roomText}>{item.amenities}</Text>
                    <Pressable style={styles.button} onPress={() => {}}>
                        <Text style={styles.descriptionText}>Book Now</Text>
                    </Pressable> 
            </View>
        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default RoomsItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 5,
        marginRight: 5
    },
    card: {
        backgroundColor: "#ebebeb",
        height: 500,
        width: 320,
        borderRadius: 20,
        borderWidth: .5,
        borderColor: "transparent",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 40,
        marginBottom: 20
    },
    image: {
        borderRadius: 20,
        marginTop: -80,
        flexDirection: "row",
        width: 300, 
        height: 380,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        resizeMode: "contain",
    },
    titleText: {
        textAlign: "center",
    },
    roomText: {
        letterSpacing: 1,
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
        margin: 5
    },
    descriptionText: {
        letterSpacing: 1,
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
    },
    button: {
        borderRadius: 8,
        margin: 20,
        padding: 10,
        elevation: 3,
        marginBottom: -25,
        marginHorizontal: 70,
        backgroundColor: "white",
    },
})