import React from "react"
import { ParallaxImage } from "react-native-snap-carousel"
import { Dimensions, ScrollView, StyleSheet, Text, Pressable, SafeAreaView, Platform } from "react-native"
import styles from '../styles';


const { width: screenWidth } = Dimensions.get('window');


function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('' + item.description)}>
        <SafeAreaView style={styles.item}>
            <ParallaxImage 
                source={{ uri: item.source }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                {...parallaxProps}
            />
            <Text style={styles.title} numberOfLines={2}>
                {item.title}
            </Text>
        </SafeAreaView>
    </Pressable>
  )
}

export default CarouselItem

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 30,
//       },
//     imageContainer: {
//         flex: 1,
//         borderRadius: 5,
//         backgroundColor: 'lightblue',
//         marginBottom: Platform.select({ ios: 0, android: 1 }),
//     },
//     image: {
//         // ...StyleSheet.absoluteFillObject,
//         width: 100,
//         height: 100,
//         resizeMode: 'contain',
//     },
//     title: {
//         fontSize: 20,
//     },
//     item: {
//         width: "100%",
//         height: screenWidth - 20,
//     },

// })