import { StyleSheet, Text, View } from "react-native";


const ExerciseListItem = ({ item }) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>
        {item.name}
      </Text>
      <Text style={styles.exerciseSubname}>
        {item.muscle} | {item.equipment}
      </Text>
    </View>
  )
}

export default ExerciseListItem

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    gap: 5
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  exerciseSubname: {
    color: "#fff8dc"
  },
});