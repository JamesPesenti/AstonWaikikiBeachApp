import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'

const CultureItem = ({ item, id }) => {
  return (
    <>
        <ScrollView>
          <View style={styles.container}>
           <View style={styles.diamondCard}>
               <ScrollView horizontal={true} style={{flexDirection: "row",}}>
                <Image 
                    key={id}
                    style={styles.image} 
                    source={{ uri: item.source }}
                />
            </ScrollView>
            <Text style={styles.diamondTitleText}>{item.place}</Text>
            <View style={{ overflowHidden: "true", padding: 10, width: 280, borderRadius: 20, borderWidth: 2, borderColor: "white", }}>
                <Text style={styles.diamondText}>{item.info}</Text>
            </View>
        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default CultureItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginLeft: 5,
      marginTop: 55
  },
  
  image: {
      borderRadius: 15,
      marginTop: -70,
      width: 300, 
      height: 330,
      resizeMode: "cover",
  },
  diamondCard: {
      backgroundColor: "#e1f0e6",
      height: 400,
      width: 300,
      borderRadius: 30,
      borderWidth: .5,
      borderColor: "transparent",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      paddingBottom: -50,
      marginBottom: 40,
      marginRight: 15,
  },
  diamondTitleText: {
    letterSpacing: 2,
    fontSize: 18,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 8
  },
  diamondText: {
    letterSpacing: 1,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    margin: 0
  },
  
  hanaumaCard: {
    backgroundColor: "#e1f0eb",
    height: 400,
    width: 280,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: "transparent",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 0,
    marginBottom: 20,
    marginLeft: 65,
  },
  hanaumaTitleText: {
    letterSpacing: 2,
    fontSize: 18,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10
  },
  hanaumaText: {
    letterSpacing: 1,
    color: "#78b38a",
    textAlign: "center",
    fontWeight: "700",
    margin: 5
  },
  
})