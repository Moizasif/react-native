import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View >
      <View style={{padding:30}}>
           <TextInput placeholder="Add Some Value" style={{borderColor:'black', borderWidth:1, padding:6 }}/>
           <Button title="ADD"  />
      </View>
      <View>

      </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
 
});
