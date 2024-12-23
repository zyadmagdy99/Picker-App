import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/Colors'

export default function InstructionText({children,style}) {
  return (
    <Text style={[styles.instructionColor,style]}>{children}</Text>

      )
}

const styles = StyleSheet.create({

  
  
    instructionColor:{
      fontWeight:"open-sans",

        color:Colors.yellow500,
        fontSize:24
      }
})