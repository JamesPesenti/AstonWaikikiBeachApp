import { ScrollView, View, Text, StyleSheet, } from "react-native"
import CocoItem from "./CocoItem"

const CocoList = ({ coco }) => {
  return (
    <>
        <ScrollView>
            <View>
                <ScrollView horizontal={true}>
                    {coco.map((item) => {
                        <>
                            <CocoItem 
                                key={item.id}
                                item={item}
                            />
                        </>
                    })}
                </ScrollView>
            </View>
        </ScrollView>
    </>
  )
}

export default CocoList