import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HeaderText({ children }) {
  return (
    <Text className="text-2xl text-center font-bold dark:text-slate-100">
      {children}
    </Text>
  );
}
