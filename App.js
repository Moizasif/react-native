import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal] );
  }
  return (
    <View style={styles.mainview}>
      <View style={styles.inputContainer}>
           <TextInput 
           placeholder="Course Goal"
           style={styles.inputBox}
           onChangeText={goalInputHandler}
           value={enteredGoal}/>
           <Button title="ADD"  onPress={addGoalHandler}/>
      </View>
      <View>
             {courseGoals.map((goal) => (
             <View key={goal} style={styles.listItem}>
                <Text>{goal}</Text>
             </View>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 mainview: {
   padding: 50
 },
 inputContainer: {
  flexDirection:'row',
   justifyContent:'space-between',
    alignItems:'center'
 },
 inputBox: {
  width:"80%",
   borderColor:'black',
    borderWidth:1,
     padding:6
 },
 listItem: {
  padding: 10,
  marginVertical: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1
 }
});
