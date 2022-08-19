import { View, ScrollView } from 'react-native'
import CultureItem from "./CultureItem"

const CultureList = ({ culture }) => {
  return (
    <>
    <ScrollView style={{marginTop: 10, paddingBottom: -100}}>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {culture.map((item) => (
                    <CultureItem 
                        key={item.id}
                        item={item}
                    />
                ))}
            </ScrollView>
        </View>
    </ScrollView>
    </>
  )
}

export default CultureList


