import { StatusBar } from "expo-status-bar";
import Router from "./app/components/Router";
import RouteContextProvider from "./app/context/RouteContextProvider";

export default function App() {
  return (
    <RouteContextProvider>
      <Router />
      <StatusBar style="auto" />
    </RouteContextProvider>
  );
}
