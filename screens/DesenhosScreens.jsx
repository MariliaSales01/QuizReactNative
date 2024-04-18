import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions
 } from './Questions'
import { Pressable } from 'react-native-web'

export default function DesenhosScreen () {
  const handleNext = () =>{
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reactQuestions [currentQuestionIndex].question}</Text>
      {reactQuestions[currentQuestionIndex].options.map((options) => <View>
        <Pressable style={styles.button} >
          <Text style={styles.options}>{options}</Text>
          </Pressable>
      </View>)}

      <Pressable style={styles.buttonNext} onPress={handleNext}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:100,
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight:'800',
    justifyContent: 'center',
  },
  options:{
    fontSize: 20,
    paddingTop: 20, 
  },
  button:{
    margin: 30,
  },
  buttonNext:{ 
    backgroundColor:'pink',
    borderRadius: 5,
    top: 60,
    height: 40,
    width: 200,
  },
  text:{
    fontSize: 20,
    fontWeight:'400',
    textAlign:'center'
  }
})