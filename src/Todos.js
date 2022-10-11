import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";

export default Todos = ({ todos, deleteHandler }) => {
  const onPressHandler = (item) => {
    deleteHandler(item.id);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Pressable
          android_ripple={{ color: "#841584" }}
          onPress={() => onPressHandler(item)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.title}>{item.text}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#841584",
    padding: 5,
  },
  pressedItem: {
    opacity: 0.4,
  },
});
