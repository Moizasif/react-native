import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.inputBox}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputBox: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 6
    }
})

export default GoalInput
