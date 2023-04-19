import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { teamsEnum } from '../constants/enums'
import PropTypes from 'prop-types';


export const TopMover = (props)=> {
    const data = props.data.sort((a, b) => b.playerPoints - a.playerPoints)
    const PlayerCardSquare = (props) =>{
      return (
        <View key={props.item.id} style={{height:100,width:120,backgroundColor:'white',elevation:6,paddingHorizontal:10,margin:3,borderRadius:10,justifyContent:'space-evenly',alignItems:'center'}}>
          <Text style={{alignSelf:'flex-start',textAlign:'center',width:'100%',fontWeight:'700',height:20}} >{props.item.playerName}</Text>
          <Text style={{fontSize:17,color:'gray',alignSelf:'center'}} >🏏 || {teamsEnum[props.item.team]} </Text>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'700'}}>{props.item.playerPoints} </Text>
          <Text style={{color:props.item.ponitChangePercentage>0?'green':'red'}}>( {props.item.ponitChangePercentage>=0?'+':''}{(props.item.ponitChangePercentage.toFixed(2)) }%)</Text>
         </View>
        </View>
      )
    }
    
  return (
    <View style={{paddingHorizontal:20}}>
        <Text style={{fontWeight:'700',fontSize:20}}>Top Movers</Text>
      <FlatList
      data={data}
      horizontal
      renderItem = {PlayerCardSquare}
      />
    </View>
  )
}

TopMover.propTypes = {
  data: PropTypes.array.isRequired
};