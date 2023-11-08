import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import RouteContextProvider from "./app/context/RouteContextProvider";
import Router from "./app/components/Router";

export default function App() {
  return (
    <RouteContextProvider>
      <Router />
      <StatusBar style="auto" />
    </RouteContextProvider>
  );
}
