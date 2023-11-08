import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorMessage({ error }) {
  return error ? (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="information-outline"
        size={20}
        color="#dc2626"
      />
      <Text style={styles.message}>{error.message}</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 2,
    marginBottom: 4,
  },
  message: {
    color: "#dc2626",
    // marginVertical : 10,
    marginHorizontal: 5,
    fontStyle: "italic",
  },
});
