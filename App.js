import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import exercises from "./assets/data/exercises.json";
import ExerciseListItem from "./components/exerciseListItem";

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
        data={exercises}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40
  }
});
