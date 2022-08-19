import { Image } from 'react-native'

function LogoTitle() {
  return (
    <Image 
        style={{ resizeMode: "stretch", margin: 60, opacity: 1, width: 110, height: 60,}}
        source={{uri: "https://www.astonwaikikibeach.com/assets/images/footer-logo.png"}}
    />
  )
}

export default LogoTitle