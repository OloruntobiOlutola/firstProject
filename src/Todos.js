import { FlatList, StyleSheet, View, Text } from "react-native";

export default Todos = ({ todos }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
});
