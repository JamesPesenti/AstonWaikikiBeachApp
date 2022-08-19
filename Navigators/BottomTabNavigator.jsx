// import HomeScreen from "../screens/HomeScreen"
// import WaikikiScreen from '../screens/WaikikiScreen';
// import RoomsScreen from '../screens/RoomsScreen';
// import StayScreen from '../screens/StayScreen';

// import LogoTitle from "../UI/LogoTitle"
// import { Ionicons } from "@expo/vector-icons"
// // import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// const BottomTab = createBottomTabNavigator()

// function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator 
//     screenOptions={{
//       headerStyle: {backgroundColor: "#df73f5"},
//       headerTitleAlign: "center",
//       headerTintColor: "white",
//       tabBarActiveTintColor: "#df73f5" 
// }}
// >
// <BottomTab.Screen 
//     name="Aston Waikiki Beach Hotel" 
//     component={HomeScreen} 
//     options={{
//       headerTitle: (props) => <LogoTitle {...props} />,
//       tabBarIcon: ({color, size}) => 
//       <Ionicons 
//         name="home" 
//         color={color}
//         size={21} 
//       />
//     }}
//   />
//   <BottomTab.Screen 
//     name="Waikiki" 
//     component={WaikikiScreen}
//     options={{
//       tabBarIcon: ({color, size}) => 
//       <Ionicons 
//         name="person" 
//         color={color}
//         size={21} 
//       />
//     }}
//   /> 
//   <BottomTab.Screen 
//     name="Rooms" 
//     component={RoomsScreen} 
//     options={{
//       tabBarIcon: ({color, size}) => 
//       <Ionicons 
//         name="planet" 
//         color={color}
//         size={21} 
//       />
//     }}
//   />
//   <BottomTab.Screen 
//     name="Stay" 
//     component={StayScreen} 
//     options={{
//       tabBarIcon: ({color, size}) => 
//       <Ionicons
//         name="book"
//         color={color}
//         size={size}
//       />
//     }}
//   />
// </BottomTab.Navigator>
//   )
// }

// export default BottomTabNavigator