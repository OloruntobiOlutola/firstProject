import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "./src/Input";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onPressHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myView}>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 15 }}>
          I would be the best in this!!!
        </Text>
        <View style={styles.button}>
          <Button
            title="Add new todo"
            color="#841584"
            onPress={onPressHandler}
          />
        </View>
        <Input isOpen={isOpen} onPressHandler={onPressHandler} />
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
    padding: 30,
  },
  myView: {
    flex: 1,
  },
  button: {
    marginTop: 15,
  },
});
