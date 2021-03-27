import React, {useState} from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals =>
       [...courseGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ] );
  }
  return (
    <View style={styles.mainview}>
      <GoalInput onAddGoal={addGoalHandler}/>
     <FlatList 
      keyExtractor = {(item,index) => item.id}
      data = {courseGoals} 
      renderItem = {itemData => <GoalItem onDelete={() => console.log('Does this work')} title={itemData.item.value}/>}/>    
    </View>
  );
}

const styles = StyleSheet.create({
 mainview: {
   padding: 50
 }
});
