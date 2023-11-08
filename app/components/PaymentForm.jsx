import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { useColorScheme } from "nativewind";
import routeContext from "../context/routeContext";
import ErrorMessage from "./ErrorMessage";

export default function PaymentForm() {
  const { pay, setPay, setFormData } = useContext(routeContext);

  const {
    control: formControl,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { colorScheme } = useColorScheme();
  const outlineColor = "#d6d3d1";
  const cursorColor = "#ea580c";
  const activeOutline = "#fdba74";
  const NAME_REGEX = /^[a-zA-Z -]+$/;
  const PHONE_REGEX = /^[0-9]{10}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handlePayment = (values) => {
    console.log(values)
    setFormData(values)
    setPay(!pay);
  };
  return (
    <View className="bg-black shadow-2xl my-10 mx-2  rounded-xl shadow-orange-500 ">
      <View className=" m-2 p-2 ">
        <Controller
          name="user_name"
          control={formControl}
          rules={{
            required: { value: true, message: "Please enter your name." },
            maxLength: { value: 30, message: "Please shorten the name." },
            pattern: {
              value: NAME_REGEX,
              message: "Please enter a valid name",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Name"
              placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
              mode={"outlined"}
              value={value}
              onChangeText={onChange}
              cursorColor={cursorColor}
              selectionColor={cursorColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutline}
              textColor={colorScheme == "dark" ? "white" : "black"}
              className="bg-transparent my-4"
            />
          )}
        />
        {errors.user_name && <ErrorMessage error={errors.user_name} />}
        <Controller
          name="user_phone"
          control={formControl}
          rules={{
            required: {
              value: true,
              message: "Please enter your phone number.",
            },
            pattern: {
              value: PHONE_REGEX,
              message: "Please enter a valid number.",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Phone"
              maxLength={10}
              keyboardType="numeric"
              placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
              mode={"outlined"}
              value={value}
              onChangeText={onChange}
              cursorColor={cursorColor}
              selectionColor={cursorColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutline}
              textColor={colorScheme == "dark" ? "white" : "black"}
              className="bg-transparent my-4"
            />
          )}
        />
        {errors.user_phone && <ErrorMessage error={errors.user_phone} />}

        <Controller
          name="user_email"
          control={formControl}
          rules={{
            required: { value: true, message: "Please provide an email." },
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email.",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
              mode={"outlined"}
              value={value}
              onChangeText={onChange}
              cursorColor={cursorColor}
              selectionColor={cursorColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutline}
              textColor={colorScheme == "dark" ? "white" : "black"}
              className="bg-transparent my-4"
            />
          )}
        />
        {errors.user_email && <ErrorMessage error={errors.user_email} />}

        <Controller
          name="amount"
          control={formControl}
          rules={{
            required: { value: true, message: "Please enter an amount." },
            min: { value: 0, message: "Please enter a positive value." },
            max: {
              value: 50000,
              message: "You can only send up to 50,000 cedis.",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Amount"
              keyboardType="numeric"
              placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
              mode={"outlined"}
              value={value}
              onChangeText={onChange}
              cursorColor={cursorColor}
              selectionColor={cursorColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutline}
              textColor={colorScheme == "dark" ? "white" : "black"}
              className="bg-transparent my-4"
            />
          )}
        />
        {errors.amount && <ErrorMessage error={errors.amount} />}

        <Button
          mode="outline"
          className="mt-4"
          buttonColor={"#ea580c"}
          onPress={handleSubmit(handlePayment)}
        >
          <Text className="text-slate-50">Pay Now</Text>
        </Button>
      </View>
    </View>
  );
}
