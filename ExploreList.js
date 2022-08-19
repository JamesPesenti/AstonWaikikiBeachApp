import { View, ScrollView } from 'react-native'
import ExploreItem from "./ExploreItem"


const ExploreList = ({ explore }) => {
  return (
    <>
     <ScrollView style={{marginTop: 10, paddingBottom: -100}}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {explore.map((item) => (
                <>
                    <ExploreItem 
                        key={item.id}
                        item={item}
                    />
                </>
            ))}
        </ScrollView>
      </View>
    </ScrollView>




       {/* <ScrollView style={{marginTop: 10, paddingBottom: -100}}>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   {explore.map((item) => (
                    <ExploreItem 
                        key={item.id} 
                        item={item}
                    />
                   ))}
                </ScrollView>
            </View>
        </ScrollView> */}

    </>  
    )
}

export default ExploreList