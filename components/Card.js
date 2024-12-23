import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

export default function Card({children}) {
  return  <View style={styles.inputContainer}> {children}</View>
}


const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:36,
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.red700,
        borderRadius:8,
        elevation:6
      }
})
