import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Finish coffee", key: "1" },
    { text: "Create to-do app", key: "2" },
    { text: "Make dinner", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => {
        return todo.key != key;
      });
    });
  };
  const submitHandler = (text) => {
    if (text.length > 2) {
      setTodos((currTodos) => {
        return [{ text, key: Math.random().toString() }, ...currTodos];
      });
    } else {
      Alert.alert("OOPS!", "To do's must be over 2 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
