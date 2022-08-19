import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { AVPlaybackStatus } from 'expo-av';
import { Video } from 'expo-av';


function Video1() {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
          shouldPlay
          ref={video}
          style={styles.video}
          source={{uri: "http://cdn.traveltripper.io/site-assets/192_884_18900/media/2018-09-11-083941/video-three.mp4"}} 
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default Video1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 400,
    height: 300,
  },
})

