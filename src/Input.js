import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import Todos from "./Todos";

export default Input = () => {
  const [text, onChangeText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addGoal = () => {
    setTodos((prevState) => [
      ...prevState,
      { text: text, id: Math.random() * 100 },
    ]);
    onChangeText("");
  };

  const deleteHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.all}>
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
      <Todos todos={todos} deleteHandler={deleteHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
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
  all: {
    marginBottom: 50,
  },
});
