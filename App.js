import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import SearchScreen from './screens/SearchScreen'
import TransactionScreen from './screens/TransactionScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render()
  {
  return (
    <View style={styles.container} >
      <AppContainer> </AppContainer>
    </View>
  );
}
}



const TabNavigator=createBottomTabNavigator({
  Transaction :{screen:TransactionScreen},
  Search:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation})=>({

  
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
     // console.log(routeName);
      if(routeName==='Transaction')
      {
        return(
        <Image source={require("./assets/book.png")} 
        style={{width:40, height:40}}/>
        )
      }
    
      else if(routeName==='Search')
      {
        return(
        <Image source={require("./assets/searchingbook.png")} 
        style={{width:40, height:40}}/>
        )
      }
    }
  }
  )


})


const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'stretch',
    justifyContent: 'center',
  },
});