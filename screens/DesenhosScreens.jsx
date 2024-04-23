import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions
 } from './Questions'
import { Pressable } from 'react-native-web'

export default function DesenhosScreen () {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  
  const handleNext = () =>{
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setCorrectAnswer(false)
  }
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reactQuestions [currentQuestionIndex].question}</Text>
      {reactQuestions[currentQuestionIndex].options.map((options) => 
      <View>
        <Pressable style={{backgroundColor: correctAnswer ? 'red' : 'green'}}
       onPress={() =>  {
          if ( options == reactQuestions[currentQuestionIndex].correctAnswer) {
            setCorrectAnswer(true)
          }
        }}>
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
    marginBottom:40,
  },
  options:{
    fontSize: 20,
    textAlign:'center',
    marginHorizontal:100,
    marginVertical:20,
    color: '#fff'
  },
  button:{
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor:'#2196F3',
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
    fontWeight:'500',
    textAlign:'center'
  }
})