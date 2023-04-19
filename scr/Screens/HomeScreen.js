import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import CarouselCards from '../components/CarouselCards';

import { TopMover } from '../components/TopMover';
import { playersData } from '../constants/playersData';
import { colors } from '../constants/colors';
import { AllPlayerList } from '../components/AllPlayerList';
export default function HomeScreen() {
      const data = [
        {
          title: "Yogendra Singh",
          body: "I might not fully understand the real use case of the app since I'm not particularly interested in cricket",
          
        },
        {
          title: "But I like ",
          body: "to get an email \n yogendra.techyug@gmail.com",
        
        },
        
      ];
      
      
      const Header = ()=>(
        <View style={[styles.headerStyle]}>
        <Text style={{color:colors.LIGHT_PRIMARY,fontSize:26,fontWeight:'800'}}>MyTeam</Text>
        <View style={{flexDirection:'row',width:'30%',justifyContent:'space-evenly'}}>
          <FontAwesome name='search' size={32} color={colors.LIGHT_PRIMARY}/>
          <FontAwesome name='user-circle' size={32} color={colors.LIGHT_PRIMARY}/>
        </View>
      </View>
      )
      
      return (
        <View style={{flex:1,backgroundColor:'white'}}>
          <StatusBar style="light" translucent={false} backgroundColor={colors.PRIMARY} />
          <Header/>
          <CarouselCards data ={data}/>
          <TopMover data = {playersData}/> 
          <AllPlayerList data = {playersData} />
    
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',  
    },
    headerStyle:{
      height:60,
      flexDirection:'row',
      paddingHorizontal:20,
      paddingVertical:10,
      justifyContent:'space-between',
      
    }
  });