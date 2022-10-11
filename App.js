import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "./src/Input";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myView}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          I would be the best in this!!!
        </Text>
        <Input />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cba",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  myView: {
    marginTop: 50,
  },
});
