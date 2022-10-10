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
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          onPress={addGoal}
          title="add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
    flexDirection: "column",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
});
