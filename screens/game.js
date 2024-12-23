import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import Title from '../components/Title'
import NumberContainer from '../components/gameComp/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import InstructionText from '../components/InstructionText'
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLog from '../components/gameComp/GuessLog'

function guessNubmer(min,max,exclude){
   
    let guessedNumber = Math.floor(Math.random()*(max-min)+min)
    if(guessedNumber === exclude)
    {
        return guessNubmer(min,max,exclude)
    }
    return guessedNumber ;
}
let max = 100;
let min = 1;
export default function Game({userNumber,gameOverHandler}) {
    const initialguess = guessNubmer(1,100,userNumber)
    const [number, setnumber] = useState(initialguess)
    const [guessR, setguessR] = useState([initialguess])
    
    useEffect(() => {
      
    if(number === userNumber){
        gameOverHandler(guessR.length)
    }
      
    }, [number,userNumber,gameOverHandler])
    useEffect(() => {
      max=100,
      min=1
    
      
    }, [])
    
    function nextGuess(direction){
         if((direction === "lower" && number < userNumber) || (direction === "greater" && number > userNumber) ) {
            Alert.alert("Don't lie!","You know that is wrong...",[
                {text:"sorry",style:"cancel"}
            ])
            return;
         }  

        if(direction =="lower"){
            max = number
        }else{
            min = number + 1
        }
        const newNumber = guessNubmer(min,max,number)
         setnumber(newNumber)
         setguessR((prev) => [newNumber,...prev])
    }
    const guessRoundListLength = guessR.length
        return (
    <View style={styles.container}>
    <Title>oppenet's guess</Title>
        <NumberContainer>{number}</NumberContainer>
    
    <View style={styles.inputContainer}>
        <InstructionText style={styles.textStyle}>Higher or lower?</InstructionText>
        <View style={styles.ButtonsContainer}>
        <View style={styles.ButtonContainer}>
    <PrimaryButton confirm={nextGuess.bind(this,"greater")}>
    <Ionicons name="add" size={24} color="white" />    
    </PrimaryButton>

        </View>
        <View style={styles.ButtonContainer}>
    <PrimaryButton confirm={nextGuess.bind(this,"lower")}>
    <Ionicons name="remove" size={24} color="white" />
    </PrimaryButton>

        </View>

        </View>
        <View style={styles.listcontainer}>
            <FlatList data={guessR}
             renderItem={(item)=><GuessLog roundNumber={guessRoundListLength - item.index} guess={item.item} />} 
             keyExtractor={(item)=>item}/>
        </View>
    </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        marginTop:12,
    },
    ButtonsContainer:{
        flexDirection:"row"
    },
    ButtonContainer:{
      flex:1
    },
    textStyle:{
        marginBottom:12
    },
    inputContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:36,
        marginHorizontal:24,
        padding:16,
        borderRadius:8,
      },
      listcontainer:{
        flex:1,
        padding:16
      }
})