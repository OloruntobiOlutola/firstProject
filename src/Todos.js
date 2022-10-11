import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";

export default Todos = ({ todos, deleteHandler }) => {
  const onPressHandler = (item) => {
    deleteHandler(item.id);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable android_ripple={true} onPress={() => onPressHandler(item)}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.text}</Text>
        </View>
      </Pressable>
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
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#841584",
  },
});
