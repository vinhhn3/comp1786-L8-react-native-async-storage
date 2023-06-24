import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
  },
  textInput: {
    width: 300,
    marginVertical: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
  buttonContainer: {
    width: 240,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
