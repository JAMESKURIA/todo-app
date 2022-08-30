import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  LogBox,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { tasks } from "./src/resources/data";

export enum Status {
  completed = "completed",
  incomplete = "incomplete",
}

export default function App() {
  LogBox.ignoreAllLogs(true);

  const _renderTasks = ({ status }) => {
    return tasks.map((task) => (
      <View
        key={task.id.toString()}
        style={tw`flex-row items-center bg-white justify-between px-2 rounded py-4 shadow my-1`}
      >
        <View style={tw`flex-row items-center `}>
          <Icon
            type={status === Status.completed ? "Ionicons" : "Feather"}
            name={
              status === Status.completed
                ? "ios-checkmark-circle-outline"
                : "circle"
            }
            size={status === Status.completed ? 25 : 20}
            style={tw`mr-2 ${
              status === Status.completed ? "text-green-500" : "text-gray-700"
            }`}
          />

          <Text style={tw`text-sm`}>{task.desc}</Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <Icon type="EvilIcons" name="calendar" size={30} />
          <Text>{task.date}</Text>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaProvider style={tw`flex-1 pt-4 bg-gray-50`}>
      <KeyboardAvoidingView style={tw`flex-1`}>
        <View style={tw`flex-1 px-2`}>
          <StatusBar style="auto" />

          {/* Menu */}
          <View style={tw`flex-row justify-between items-center pt-3`}>
            <Icon size={40} name="menu-outline" type="Ionicons" />
            <View style={tw`flex-row items-center`}>
              <Icon
                name="dot-single"
                type="Entypo"
                size={30}
                style={tw`text-red-200`}
              />
              <Text style={tw`uppercase text-lg`}>Chores</Text>
            </View>
          </View>

          {/* Add Item input */}
          <View
            style={tw`my-5 px-3 flex-row items-center bg-gray-200 rounded-full`}
          >
            <TextInput placeholder="Add Item" style={tw`flex-1 py-3 mx-2`} />
            <Icon
              name="add-circle-sharp"
              type="Ionicons"
              size={35}
              style={tw`text-blue-400`}
            />
          </View>

          {/* separator */}
          <View style={tw` w-full border-t border-gray-100 mb-5`} />

          {/* Todos */}
          <View>
            {/* To do */}
            <Text style={tw`uppercase font-bold text-gray-700`}>TO DO</Text>
            <View style={tw`my-4`}>{_renderTasks({ status: "todo" })}</View>

            {/* Complete */}
            <Text style={tw`uppercase font-bold text-gray-700`}>Completed</Text>
            <View style={tw`my-4`}>
              {_renderTasks({ status: "completed" })}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
