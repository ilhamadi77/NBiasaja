import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Text, Box, Pressable } from "native-base";

export default function IndDec({ navigation }) {
  const [counter, setCounter] = useState(0);


  function Add() {
    return setCounter(counter + 1);

  }
  function Less() {
    if (counter > 0) {
      return setCounter(counter - 1);
    }
  }

  return (
    <Box
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      w="100%"
      p={10}
    >
      <StatusBar />

      <Text textAlign="center">
        if you click the add button it will increase by one vice if you want
      </Text>

      <Text fontSize={50} style={{ color: "#273c75" }}>
        {counter}
      </Text>
      <TouchableOpacity
        onPress={Add}
        style={{
          backgroundColor: 'green',
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 10
        }}
      >
        <Text style={{ color: "white" }} > Add</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={Less}
        style={{
          backgroundColor: 'red',
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 10
        }}
      >
        <Text style={{ color: "yellow" }} > Less</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => navigation.navigate("FormLogin")}
        style={{
          color: "yellow",
          marginVertical: 30,

        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 21 }}>Move To form</Text>
      </Pressable>
    </Box>
  )
}