import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'
import Colors from '../constants/Colors'
import PrimaryButton from '../components/PrimaryButton'

export default function GameOver({rounds,userNumber,NewGame}) {
  return (
    <View style={styles.root}>
      <Title>Game Over!</Title>
      <View style={styles.imageCon}>

      <Image style={styles.img} source={require("../assets/img/success.png")}/>
      </View> 
      <Text style={styles.summary}>
      your phone needed {""}
      <Text style={styles.highLight}>{rounds}</Text>{" "}
       rounds to guess the number {""}
        <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>
        <PrimaryButton confirm={NewGame}>Start New Game</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
  root:{
    flex:1,
    padding:24,
    justifyContent:"center",
    alignItems:"center"
  },
  imageCon:{
    width:300,
    height:300,
    borderRadius:150,
    borderWidth:3,
    borderColor:Colors.red800,
    overflow:"hidden",
    margin:36
  },
  img:{
    width:"100%",
    height:"100%"
  },
  summary:{
    fontFamily:"open-sans",
    fontSize:23,
    textAlign:"center",
    marginBottom:24
  },
  highLight:{
    fontFamily:"open-sans-bold",
    color:Colors.red500
  }
})