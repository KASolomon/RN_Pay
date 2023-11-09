import React from "react";
import { View } from "react-native";
import HeaderText from "../components/HeaderText";
import PaymentForm from "../components/PaymentForm";

export default function CheckoutScreen() {
  return (
    <View className="min-h-screen  pt-12 bg-slate-200 dark:bg-black ">
      <HeaderText>Checkout</HeaderText>
      <PaymentForm />
    </View>
  );
}

