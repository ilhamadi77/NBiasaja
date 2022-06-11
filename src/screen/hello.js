import { Box, Text, Pressable } from 'native-base';
import * as React from 'react'
import { Image } from 'react-native';


export default function Hello({ navigation }) {
  const pic = {
    uri: "https://images.unsplash.com/photo-1654190556461-3919acf03f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  }
  return (
    <Box bg="primary.900" flex={1} alignItems="center" justifyContent="center">
      <Image source={pic} style={{ width: '90%', height: 200 }} />
      <Text fontFamily="body" fontWeight={400} fontSize={34}>
        hello ya mbaa
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Number")}
        style={{
          backgroundColor: "#f34f43",
          width: "50%",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10
        }}
      >
        <Text style={{ fontStyle: "italic" }}>
          Increment dan Decrement
        </Text>
      </Pressable>
    </Box >
  )
}