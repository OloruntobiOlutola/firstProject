import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  // setTodos((prevState) => [prevState, text]);
  // console.log(todos);
  const addGoal = () => {
    setTodos((prevState) => [...prevState, text]);
    onChangeText("");
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myView}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          I would be the best in this!!!
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.button}>
            <Button onPress={addGoal} title="add" color="#841584" />
          </View>
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
  myView: {
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    height: 50,
    marginBottom: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
    height: 50,
    marginTop: 13,
  },
});
