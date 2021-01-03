import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New task...."
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} color="coral" title="Add" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
