import React from "react";
import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import tw from "tailwind-react-native-classnames";
import { Task } from "../home";

interface Props {
  tasks: Task[];
}

const RenderTasks: React.FC<Props> = ({ tasks }) => {
  const _renderTasks = ({ isCompleted }: { isCompleted: boolean }) => {
    const _tasks = tasks.filter((task) => task.isCompleted === isCompleted);

    return _tasks.map((task) => (
      <View
        key={task.id.toString()}
        style={tw`flex-row items-center bg-white justify-between px-2 rounded py-4 shadow my-1`}
      >
        <View style={tw`flex-row items-center `}>
          <Icon
            type={task.isCompleted ? "Ionicons" : "Feather"}
            name={task.isCompleted ? "ios-checkmark-circle-outline" : "circle"}
            size={task.isCompleted ? 25 : 20}
            style={tw`mr-2 ${
              task.isCompleted ? "text-green-500" : "text-gray-700"
            }`}
          />
          <Text
            style={tw`text-sm ${
              task.isCompleted ? "line-through text-gray-400" : "text-gray-700 "
            }`}
          >
            {task.desc}
          </Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Icon
            type="EvilIcons"
            name="calendar"
            size={30}
            style={tw`${task.isCompleted ? "text-gray-400" : "text-gray-700 "}`}
          />
          <Text
            style={tw`${task.isCompleted ? "text-gray-400" : "text-gray-700 "}`}
          >
            {task.date}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <>
      {/* To Do */}
      <>
        <Text style={tw`uppercase font-bold text-gray-700 pt-4`}>To Do</Text>
        <ScrollView style={tw`py-4`} showsVerticalScrollIndicator={true}>
          {_renderTasks({ isCompleted: false })}
        </ScrollView>
      </>

      {/* Completed */}
      <>
        <Text style={tw`uppercase font-bold text-gray-700 pt-4`}>
          Completed
        </Text>
        <ScrollView style={tw`py-4`} showsVerticalScrollIndicator={true}>
          {_renderTasks({ isCompleted: true })}
        </ScrollView>
      </>
    </>
  );
};

export default RenderTasks;
