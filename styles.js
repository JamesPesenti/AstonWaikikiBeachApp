
import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 290,
    height: screenWidth - 20, //height will be 20 units less than screen width.
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "transparent",
    marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
  },
  
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#78b38a'

  },
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
});

export default styles;
