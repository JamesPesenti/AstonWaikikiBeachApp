import { View, ScrollView, StyleSheet, Text, } from "react-native"
import RoomsItem from "./RoomsItem"

const RoomsList = ({ rooms }) => {
  return (
    <>
    <ScrollView style={{marginTop: 10, paddingBottom: -100}}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {rooms.map((item) => (
                <>
                    <RoomsItem 
                        key={item.id}
                        item={item}
                    />
                </>
            ))}
        </ScrollView>
      </View>
    </ScrollView>
    </>
  )
}

export default RoomsList

