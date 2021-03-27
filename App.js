import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainview}>
      <View style={styles.inputContainer}>
           <TextInput placeholder="Course Goal" style={styles.inputBox}/>
           <Button title="ADD"  />
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
 }
});
