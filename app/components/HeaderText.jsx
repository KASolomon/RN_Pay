import React from "react";
import { Text } from "react-native";

export default function HeaderText({ children }) {
  return (
    <Text className="text-2xl text-center font-bold dark:text-slate-100">
      {children}
    </Text>
  );
}
