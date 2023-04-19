import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';
export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})


 export const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={{justifyContent:'center',width:SLIDER_WIDTH,alignItems:'center',height:150}} key={index}>
      <LinearGradient
        // Button Linear Gradient
        colors={[colors.LIGHT_PRIMARY,colors.PRIMARY]}
        start = {{x:0.1,y:0.1}}
        end =  {{x:0.9,y:0.9}}
        style={{
          borderRadius:20,
          height:150,
          width:ITEM_WIDTH*0.9,
          padding:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around'
        }}>
          <View>
          <Text style={{fontSize:30,color:'white'}}>{item.title}</Text>
 <Text style={{color:'white',width:200}}>{item.body}</Text>
          </View>
        <Image source={require('../../assets/dollor_bag.png')} style={{height:80,width:80}} />
       
      </LinearGradient>
      
    </View>
  )
}
