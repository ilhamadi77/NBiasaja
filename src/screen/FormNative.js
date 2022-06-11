import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function FormNativeBase() {
  return <Box
    safeArea
    bg="primary.100"
    flex={1}
    p={10}
    w="100%"
    mx="auto"
    justifyContent="center"
  >
    <Heading size="lg" color="primary.500">
      Welcome
    </Heading>
    <Heading size="xs" color="primary.500">
      Sign in to continue
    </Heading>

    <VStack space={2} mt={5}>
      <FormControl>
        <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
          Email
        </FormControl.Label >
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
          Password
        </FormControl.Label >
        <Input />
      </FormControl>
    </VStack>

  </Box>;
}