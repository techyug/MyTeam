import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './scr/Screens/HomeScreen';
import Wallet from './scr/Screens/Wallet';
import TeamScreen from './scr/Screens/TeamScreen';
import MoreScreens from './scr/Screens/MoreScreens';
import { colors } from './scr/constants/colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarLabel:"",
      tabBarShowLabel:false,
      tabBarActiveTintColor:colors.LIGHT_PRIMARY,
      tabBarStyle:{
        height:60
      },
      
    
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
       options={{
        
          tabBarIcon: ({ focused,color, size }) => (
            <Ionicons name="home-outline" color={color} style={{
              borderTopWidth:focused?5:0,
              borderColor:color,
              paddingVertical:10,
              paddingHorizontal:10
              
            }}  size={size+10} />
          )
        }} />
      <Tab.Screen name="Team"  component={TeamScreen} 
      options={{
        tabBarIcon: ({ focused,color, size }) => (
          <Ionicons name="briefcase-outline" color={color} style={{
            borderTopWidth:focused?5:0,
            borderColor:color,
            paddingVertical:10,
            paddingHorizontal:10
            
          }}  size={size+10} />
        )
      }} />
    
      <Tab.Screen name="Wallet" component={Wallet} 
      options={{
        tabBarIcon: ({ focused,color, size }) => (
          <Ionicons name="wallet-outline" color={color} style={{
            borderTopWidth:focused?5:0,
            borderColor:color,
            paddingVertical:10,
            paddingHorizontal:10
            
          }}  size={size+10} />
        )
      }} 
      />
      <Tab.Screen name="More" component={MoreScreens} 
       options={{
        tabBarIcon: ({ focused,color, size }) => (
          <Ionicons name="menu-outline" color={color} style={{
            borderTopWidth:focused?5:0,
            borderColor:color,
            paddingVertical:10,
            paddingHorizontal:10
            
          }}  size={size+10} />
        )
      }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  )

}

