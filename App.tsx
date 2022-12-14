import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from "native-base";

import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'

export default function App() {
  const [ fontsLoaded] = useFonts ({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900">
        <Text color="white" fontSize={24}>Carlos Kenny</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}