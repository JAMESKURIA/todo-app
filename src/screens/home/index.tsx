import React from "react";
import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import tw from "tailwind-react-native-classnames";
import { tasks } from "../../resources/data";
import AddTodoInput from "./components/AddTodoInput";
import RenderTasks from "./components/RenderTasks";

export function Home() {
  return (
    <>
      {/* Menu */}
      <View style={tw`flex-row justify-between items-center pt-5`}>
        <Icon
          size={40}
          name="menu-outline"
          type="Ionicons"
          style={tw`text-gray-900`}
        />
        <View style={tw`flex-row items-center`}>
          <Icon
            name="dot-single"
            type="Entypo"
            size={30}
            style={tw`text-red-300`}
          />
          <Text style={tw`uppercase text-lg mr-4 font-semibold text-gray-700`}>
            Chores
          </Text>
        </View>
      </View>

      {/* Add Item input */}
      <AddTodoInput />

      {/* separator */}
      <View style={tw` w-full border-t border-gray-100 mt-3`} />

      {/* Todos */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderTasks tasks={tasks} />
      </ScrollView>
    </>
  );
}
