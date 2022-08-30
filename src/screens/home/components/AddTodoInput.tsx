import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import tw from "tailwind-react-native-classnames";

const AddTodoInput = () => {
  return (
    <View style={tw`my-5 px-3 flex-row items-center bg-gray-200 rounded-full`}>
      <TextInput placeholder="Add Item" style={tw`flex-1 py-3 mx-2`} />
      <Icon
        name="add-circle-sharp"
        type="Ionicons"
        size={35}
        style={tw`text-blue-400`}
      />
    </View>
  );
};

export default AddTodoInput;
