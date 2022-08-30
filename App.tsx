import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Home } from "./src/screens/home/index";

export default function App() {
  LogBox.ignoreAllLogs(true);

  return (
    <SafeAreaProvider style={tw`flex-1 pt-4 bg-gray-50`}>
      <KeyboardAvoidingView style={tw`flex-1 px-2`}>
        <StatusBar style="auto" />

        <Home />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
