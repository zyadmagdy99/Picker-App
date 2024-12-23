import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'


export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.yellow500,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:Colors.yellow500,
        fontSize:36,
        fontWeight:"open-sans-bold",
    }
})