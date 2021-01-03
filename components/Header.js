import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 45,
    backgroundColor: "#036b62",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
