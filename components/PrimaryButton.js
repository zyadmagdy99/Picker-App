import React from 'react'
import {View , Text, StyleSheet, Pressable} from "react-native"
import Colors from '../constants/Colors'
export default function PrimaryButton({children,confirm}) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={confirm} android_ripple={{color:Colors.red600}}
      style={({pressed})=>pressed ?[styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children} </Text>

      </Pressable>
    </View>
  )
}

let styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius:28,
    margin:4,
    overflow:"hidden"
  },
  buttonInnerContainer:{
    backgroundColor:Colors.red500,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:4,
  },
  buttonText:{
    color:"white",
    textAlign:"center",
  },
  pressed:{
    opacity:0.75
  }
})