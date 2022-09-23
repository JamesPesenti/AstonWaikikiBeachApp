import "react-native-gesture-handler";
import {DrawerActions} from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons"
import LogoTitle from "./UI/LogoTitle"
import WelcomeScreen from './screens/WelcomeScreen';
import AstonWaikikiScreen from './screens/AstonWaikikiScreen';
import RoomsScreen from './screens/RoomsScreen';
import CheckInScreen from './screens/CheckInScreen';
import ExploreScreen from './screens/ExploreScreen';
import { NavigationContainer } from "@react-navigation/native"

// import { createNativeStackNavigator } from "@react-navigation/native-stack"
// const Stack = createNativeStackNavigator()

import { createDrawerNavigator } from "@react-navigation/drawer"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()




function BottomTabNavigator() {
  return (
    <>
  <StatusBar style="light"/>
  <BottomTab.Navigator 
      screenOptions={{
        tabBarStyle: {
          borderRadius: 10,
          margin: 10
        },
        headerShown: false,
        headerStyle: {backgroundColor: "#bae6a1"},
        headerTitleAlign: "center",
        headerTintColor: "#c3d6a7",
        TabActiveTintColor: "#c3d6a7",
        tabBarInactiveTintColor: "#78b38a",
        tabBarActiveTintColor: "#c3d6a7",
      }}
      >
<BottomTab.Screen 
    name="Aston Waikiki" 
    component={AstonWaikikiScreen} 
    options={{
      headerTitle: (props) => <LogoTitle {...props} />,
      tabBarIcon: ({color, size}) => 
      <Ionicons
        name="business-outline" 
        color={color}
        size={25} 
      />
    
    }}
  />
  <BottomTab.Screen 
    name="Rooms" 
    component={RoomsScreen} 
    options={{
      tabBarIcon: ({color, size}) => 
      <Ionicons 
        name="bed-outline" 
        color={color}
        size={25} 
      />
    }}
  />
  <BottomTab.Screen 
    name="Check-In" 
    component={CheckInScreen}
    options={{
      tabBarIcon: ({color, size}) => 
      <Ionicons 
        name="phone-portrait-outline" 
        color={color}
        size={25} 
      />
    }}
  /> 
  <BottomTab.Screen 
    name="Explore" 
    component={ExploreScreen} 
    options={{
      tabBarIcon: ({color, size}) => 
      <Ionicons
        name="compass-outline"
        color={color}
        size={size}
      />
    }}
  />
</BottomTab.Navigator>
</>
  )
}


export default function App() {
  return (
    <>
    <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#c3d6a7',
              height: 90
            },
            drawerPosition: "left",
            headerTintColor: "white",
            sceneContainerStyle: {backgroundColor: "#bae6a1"},
            drawerContentStyle: {backgroundColor: "white"},
            drawerInactiveTintColor: "#bae6a1",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#bad694",
          }}
        >
          <Drawer.Screen 
            name="Welcome"
            component={WelcomeScreen}
            options={{
              sceneContainerStyle: {backgroundColor: "white"},
              headerShown: true,
              drawerIcon: ({size, color}) => (
                <Ionicons
                  name="home"
                  color={color}
                  size={size}
                />
              )
            }}
          />
            <Drawer.Screen 
              name="Aston Waikiki Hotel"
              component={BottomTabNavigator}
              options={{
                headerShown: true,
                drawerIcon: ({size, color}) => (
                  <Ionicons
                    name="business"
                    color={color}
                    size={size}
                />
              )
            }}
          />
          <Drawer.Screen
            name="Book Your Room"
            component={BottomTabNavigator}
            options={{
              drawerIcon: ({size, color}) => (
                <Ionicons
                  name="bed-outline"
                  color={color}
                  size={size}
                />
              )
            }}
           />
           {/* <Drawer.Screen
            name="Waikiki"
            component={BottomTabNavigator}
            options={{
              drawerIcon: ({size, color}) => (
                <>
                <Ionicons
                  name="camera"
                  color={color}
                  size={21}
                />
                 <Ionicons
                  name="ice-cream-outline"
                  color={color}
                  size={26}
                />
                </>
              )
            }}
           /> */}
           <Drawer.Screen
            name="Check In"
            component={BottomTabNavigator}
            options={{
              drawerIcon: ({size, color}) => (
                <Ionicons
                  name="phone-portrait-outline"
                  color={color}
                  size={size}
                />
              )
            }}
           />
          <Drawer.Screen 
            name="Explore"
            component={BottomTabNavigator}
            options={{
              drawerIcon: ({size, color}) => (
                <Ionicons
                  name="compass-outline"
                  color={color}
                  size={size}
                />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
    
  );
}




// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// const BottomTab = createBottomTabNavigator()

// bottom tabs nav

{/* <NavigationContainer>
<BottomTab.Navigator 
  screenOptions={{
    headerStyle: {},
    headerTitleAlign: {},
    headerTintColor: {},
    tabBarActiveTintColor: {}
  }}
>
  <BottomTabScreen 
    name="Waikiki"
    component={WaikikiScreen}
    options={{
      headerTitle: "Waikiki",
      tabBarIcon: ({color, size}) => {
        <Ionicons 
          name="hat"
          color={color}
          size={size}
        />
      }
  }} 
  />
  <BottomTabScreen 
    name="Rooms"
    component={RoomsScreen}
    options={{
      tabBarIcon: ({color, size}) => {
        <Ionicons 
          name="door"
          color={color}
          size={size}
        />
      }
  }}   
  />
  <BottomTabScreen 
    name="Stay"
    component={StayScreen}
    options={{
      tabBarIcon: ({color, size}) => {
        <Ionicons 
          name="home"
          color={color}
          size={size}
        />
      }
  }}
  />
</BottomTab.Navigator>
</NavigationContainer> */}








// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator 
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: 'black',
//         },
//         headerTintColor: "white",
//         sceneContainerStyle: {backgroundColor: "#c6d986"},
//         drawerContentStyle: {backgroundColor: "#b0dc19"},
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "white",
//         drawerActiveBackgroundColor: "#c6d986",
//     }}
//     >
//       <Drawer.Screen 
//         name="Explore Waikiki"
//         component={WaikikiScreen}
//         // options={}
//       />
//       <Drawer.Screen 
//         name="Rooms"
//         component={RoomsScreen}
//         // options={}
//       />
//       <Drawer.Screen 
//         name="Stay"
//         component={StayScreen}
//         // options={}
//       />
//     </Drawer.Navigator>
//   )
// }
