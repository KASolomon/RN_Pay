import React, { useState } from "react";
import RouteContext from "./routeContext";

export default function RouteContextProvider({ children }) {
  const [pay, setPay] = useState(false);
  const [formData, setFormData] = useState();
  return (
    <RouteContext.Provider value={{ pay, setPay, formData, setFormData }}>
      {children}
    </RouteContext.Provider>
  );
}

