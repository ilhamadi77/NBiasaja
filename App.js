//Import React Native Gesture Handler
import 'react-native-gesture-handler';

import * as React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

//import font with expo
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from '@expo-google-fonts/poppins';

import Container from './Container';

// const newColorTheme = {
//   brand: {
//     900: '#8287af',
//     800: '#7c83db',
//     700: '#b3bef6',
//   },
// }
// const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular"
      },
      500: {
        medium: "Poppins_500Medium"
      },
      700: {
        bold: "Poppins_700Bold",
        italic: "Poppins_700Bold_Italic"
      },
    }
  }

  const customColor = {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  }

  const theme = extendTheme({
    colors: customColor,
    fontConfig,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      footer: "Poppins",
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }

}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   centeredView: {
//     flex: 0.8,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }

// });
