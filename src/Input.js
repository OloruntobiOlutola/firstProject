import React from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import Todos from "./Todos";

export default Input = ({ isOpen, onPressHandler }) => {
  const [text, onChangeText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addGoal = () => {
    if (text.length < 1) return;
    setTodos((prevState) => [
      ...prevState,
      { text: text, id: Math.random() * 100 },
    ]);
    onChangeText("");
  };

  const onButtonPress = () => {
    onPressHandler();
  };

  const deleteHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.all}>
      <Modal
        visible={isOpen}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/image/goal.png")}
            style={styles.image}
          />
          <View style={styles.modal}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <View style={styles.button}>
              <Button onPress={addGoal} title="add" color="#841584" />
            </View>
          </View>
          <View style={styles.button2}>
            <Button title="close" onPress={onButtonPress} />
          </View>
        </View>
      </Modal>
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
  button: {
    textAlign: "center",
    height: 50,
    marginTop: 13,
  },
  all: {
    marginBottom: 80,
  },
  modal: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#cba",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    textAlign: "center",
    height: 50,
    marginTop: 7,
    borderRadius: 20,
    width: "60%",
  },
  image: {
    height: 100,
    width: 100,
  },
});
