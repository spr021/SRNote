import {StyleSheet} from 'react-native';
import { Box, extendTheme, NativeBaseProvider, Text, View } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View></View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  salam: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
});