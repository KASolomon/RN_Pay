import React, { useContext } from 'react';
import routeContext from "../context/routeContext";
import CheckoutScreen from "../screens/CheckoutScreen";
import PaymentGateway from "../screens/PaymentGateway";

export default function Router() {
      const { pay } = useContext(routeContext);

  return <>{pay ? <PaymentGateway /> : <CheckoutScreen />}</>;
}
