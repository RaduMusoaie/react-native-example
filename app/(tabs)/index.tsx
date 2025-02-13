import { Text, View } from "react-native";
import TaskList from "@/components/TaskList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Welcome to this example app!</Text>
    </View>
  );
}
