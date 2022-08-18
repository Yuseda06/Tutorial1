import React from "react";
import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";

const ComponentsScreen = () => {
  const friends = [
    { name: "Irfan", age: "12" },
    { name: "Naufal", age: "11" },
    { name: "Zakwan", age: "8" },
    { name: "Fara", age: "40" }
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {" "}
            {item.name} - Age {item.age}{" "}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ComponentsScreen;


