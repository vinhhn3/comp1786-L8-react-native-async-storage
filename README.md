# **A Quick Note**

**AsyncStorage.setItem** can either update an existing entry if it did exist for a given key or add a new one otherwise:

```
await AsyncStorage.setItem("@key", value)
```

To retrieve an item by key:

```
const data = await AsyncStorage.getItem("@key")
```

To remove an item by key:

```
await AsyncStorage.removeItem("@key");
```

To clear all data stored with AsyncStorage at once:

```
await AsyncStorage.clear()
```

# **The Example**

## **App Preview**

This app allows the user to set their nickname so that they can have a personal and unique experience:

Even after you reload the app, the data is still there. If you have a closer look, you will notice that when a button is pressed, the soft keyboard will disappear. To achieve so, we use this:

https://www.kindacode.com/wp-content/uploads/2021/11/React-Native-AsyncStorage.mp4

```
Keyboard.dismiss();
```

## **Installing**

In the old days, AsyncStorage API was a part of React Native core, but now it is deprecated, and you should use the [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) package instead.

For React Native Expo projects:

```markdown
npm i @react-native-async-storage/async-storage
```

Now it is ready to be used:

```markdown
import AsyncStorage from '@react-native-async-storage/async-storage';
```

## **The Code**

### Update styles

```jsx
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
```

### Build skeleton

```jsx
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
```

### Complete functions

```jsx
useEffect(() => {
  const firstLoad = async () => {
    try {
      const savedNickname = await AsyncStorage.getItem("@nickname");
      setNickname(savedNickname);
    } catch (err) {
      console.log(err);
    }
  };

  firstLoad();
}, []);

const saveNickname = async () => {
  try {
    await AsyncStorage.setItem("@nickname", nickname);
  } catch (err) {
    console.log(err);
  }

  Keyboard.dismiss();
};

const removeNickname = async () => {
  try {
    await AsyncStorage.removeItem("@nickname");
    setNickname();
  } catch (err) {
    console.log(err);
  }
  Keyboard.dismiss();
};
```

### Add validation for null value

```jsx
const saveNickname = async () => {
  try {
    if (!nickname) {
      Alert.alert("ERROR", "Nickname should not be full", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    await AsyncStorage.setItem("@nickname", nickname);
  } catch (err) {
    console.log(err);
  }

  Keyboard.dismiss();
};
```
