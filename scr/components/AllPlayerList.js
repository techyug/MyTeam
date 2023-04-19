import { Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types';
import { useState } from 'react'
import { Pressable } from 'react-native'
import { teamsEnum } from '../constants/enums'
import { colors } from '../constants/colors'

export const AllPlayerList = (props) =>{
    const [tab, setTab] = useState("Trending");
    const PlayerCardReactangle = (props) => {
        return (
            <View key={props.item.id} style={{ height: 80, backgroundColor: 'white', elevation: 6, paddingHorizontal: 10, margin: 3, borderRadius: 10, justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ alignSelf: 'flex-start', textAlign: 'center', fontWeight: '700', height: 20 }} >{props.item.playerName}</Text>
                    <Text style={{ fontWeight: '700' }}>{props.item.playerPoints} </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 17, color: 'gray', alignSelf: 'center' }} >🏏 {teamsEnum[props.item.team]} </Text>

                    <Text style={{ color: props.item.ponitChangePercentage > 0 ? 'green' : 'red' }}>( {props.item.ponitChangePercentage >= 0 ? '+' : ''}{(props.item.ponitChangePercentage.toFixed(2))}%)</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontWeight: '700', fontSize: 20 }}>All List</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 5 }}>
                <Pressable onPress={() => {
                    setTab("Trending")
                }} style={{ backgroundColor: tab == 'Trending' ? colors.LIGHTEST_PRIMARY : 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 20, marginHorizontal: 10 }}>
                    <View>
                        <Text style={{ color: tab == 'Trending' ? colors.LIGHT_PRIMARY : 'black', fontWeight: '700', paddingHorizontal: 10 }}>Trending</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    setTab("New Players")
                }} style={{ backgroundColor: tab == 'New Players' ? colors.LIGHTEST_PRIMARY : 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 20, marginHorizontal: 10 }}>
                    <View>
                        <Text style={{ color: tab == 'New Players' ? colors.LIGHT_PRIMARY : 'black', fontWeight: '700', paddingHorizontal: 10 }}>New Players</Text>
                    </View>
                </Pressable>
            </View>

            {
                tab === 'Trending' ?
                (<FlatList data={props.data.sort((a, b) => b.playerPoints - a.playerPoints)}
                    renderItem={PlayerCardReactangle}
                />)
                :
                (<FlatList data={props.data.sort((b, a) => b.playerPoints - a.playerPoints)}
                    renderItem={PlayerCardReactangle}
                />)
            }
            
        </View>
    )
}
AllPlayerList.propTypes = {
    style: PropTypes.object,
    data: PropTypes.array.isRequired,
  };
