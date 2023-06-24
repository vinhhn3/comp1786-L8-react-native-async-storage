import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const firstLoad = async () => {};
    firstLoad();
  }, []);

  const saveNickname = async () => {};

  const removeNickname = async () => {};

  return (
    <View style={styles.container}>
      {nickname ? (
        <Text style={styles.heading}>Hello {nickname}</Text>
      ) : (
        <Text style={styles.heading}>Create your nickname</Text>
      )}

      <TextInput
        placeholder="Enter Your Nickname"
        style={styles.textInput}
        value={nickname}
        onChangeText={(value) => {
          setNickname(value);
        }}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveNickname} />
        <Button title="Delete" onPress={removeNickname} />
      </View>
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
