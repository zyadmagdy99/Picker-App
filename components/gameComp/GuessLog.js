import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

export default function GuessLog({roundNumber,guess}) {
  return (
    <View style={styles.list}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess:{guess}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    list:{
        borderColor:Colors.red800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.yellow500,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    }
})