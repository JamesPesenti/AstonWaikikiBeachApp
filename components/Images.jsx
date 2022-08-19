

import { Dimensions, View, StyleSheet } from "react-native";
import picturesData from "../assets/data/picturesData";


export default function Images({ data }) {
    const settings = {
      borderRadius: 5,
      sliderWidth: 100,
      sliderHeight: 100,
      itemWidth: 290 - 20,
      data: data,
      renderItem: Images,
      hasParallaxImages: true,
};



return (
    <>
    <View style={styles.container}>
      <Images style={styles.container} {...settings}  />
    </View>
    </>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
})
