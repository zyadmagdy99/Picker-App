import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Startgame from "./screens/Startgame";
import {LinearGradient} from "expo-linear-gradient";
import { useState } from 'react';
import Game from './screens/game';
import Colors from './constants/Colors';
import GameOver from './screens/gameOver';
import {useFonts} from "expo-font";


export default function App() {
  useFonts({
    "open-sans":require("./expo-font/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./expo-font/OpenSans-Bold.ttf"),
})
 function NewGame(){
  setPickedNumber(null);
  setrounds(0);
 }
  const [PickedNumber, setPickedNumber] = useState()
  const [gameover, setgameover] = useState(true)
  const [rounds, setrounds] = useState(0)
  let page = <Startgame handlePickedNumber={handlePickedNumber}/>
  if(PickedNumber){
    page = <Game gameOverHandler={gameOverHandler} userNumber={PickedNumber}/>
  }
  function handlePickedNumber(ChoosenNumber){
    setPickedNumber(ChoosenNumber)
    setgameover(false)
  }
  function gameOverHandler(numberOfRounds){
    setgameover(true)
    setrounds(numberOfRounds)
  }
  if(gameover && PickedNumber){
   page = <GameOver rounds={rounds} userNumber={PickedNumber} NewGame={NewGame}/>
  }
  return (
   <LinearGradient colors={[Colors.red700,Colors.yellow500]} style={styles.base}>
    <ImageBackground source={require("./assets/img/bg.png")} resizeMode='cover' imageStyle={styles.img} style={styles.base}>
   <SafeAreaView style={styles.base}>
   {page}

   </SafeAreaView>
    </ImageBackground>
   </LinearGradient>
    
   
  );
}

const styles = StyleSheet.create({
  base:{
    flex:1
  },
  img:{
    opacity:0.25
  }
})