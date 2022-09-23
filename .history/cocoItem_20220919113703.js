import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image, Pressable } from "react-native"
import Images from "./components/Images"
import styles from './styles'

const CocoItem = ({ item, id}) => {
  return (
    <>
        <ScrollView>
            <View>
                <ScrollView horizontal={true}>
                    <Image 
                        key={id}
                        style={styles.image}
                        source={{ uri: item.id}}
                    />
                </ScrollView>
            </View>
        </ScrollView>
    </>
  )
}

export default CocoItem

const styles = StyleSheet.create({
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
})