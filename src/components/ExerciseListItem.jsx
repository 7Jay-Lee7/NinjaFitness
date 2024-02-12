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
    backgroundColor: "#d3d3d3",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    gap: 5,
    marginHorizontal: 3,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,

    elevation: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  exerciseSubname: {
    color: "#2f4f4f"
  },
});