import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
 
export default function Startgame({handlePickedNumber}) {
  const [EnterNum, setEnterNum] = useState("")
  function numberHandler(e){
    setEnterNum(e)    
  }
  function clear(){
    setEnterNum("")
  }
  function confirm(){
    const chosenNumber = parseInt(EnterNum)
    if(chosenNumber>99 ||chosenNumber <=0 || isNaN(chosenNumber)){
      Alert.alert(
        "Invalid number!",
        "Number has to be between 1 and 99",
        [{text:"Okay",style:"destructive",onPress:clear}],
      )
      return;
    }
    handlePickedNumber(chosenNumber)
  }
  return (
    <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>     
      <View style={styles.inputContainer}>
        
      <InstructionText >Enter a Number</InstructionText>
      <TextInput value={EnterNum} onChangeText={numberHandler} style={styles.numberInput} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} maxLength={2} />
      <View style={styles.ButtonsContainer}>
        <View style={styles.ButtonContainer}>
      <PrimaryButton confirm={clear}>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
      <PrimaryButton confirm={confirm}>Confirm</PrimaryButton>
        </View>
      </View>
        
      </View>

    </View>
  )
}

let styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:"center"
  }
  ,
  numberInput:{
    height:60,
    width:50,
    fontSize:32,
    borderBottomColor:Colors.yellow500,
    borderBottomWidth:2,
    color:Colors.yellow500,
    marginVertical:8,
    fontWeight:"bold",
    textAlign:"center",
  },
  ButtonsContainer:{
      flexDirection:"row"
  },
  ButtonContainer:{
    flex:1
  },
  inputContainer:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:36,
      marginHorizontal:24,
      padding:16,
      backgroundColor:Colors.red700,
      borderRadius:8,
      elevation:6
    },
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