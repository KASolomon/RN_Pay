import React, { useContext } from 'react'
import { Paystack } from 'react-native-paystack-webview'
import key from '../config/key'
import routeContext from '../context/routeContext'

export default function PaymentGateway() {
  const {pay , setPay,formData:{amount, user_name, user_email, phone}} = useContext(routeContext)
  return (
    <Paystack
      paystackKey={key}
      amount={amount}
      billingEmail={user_email}
      billingName={user_name}
      activityIndicatorColor="#ea580c"
      phone={phone}
      currency='GHS'
      onSuccess={()=>{ setPay(!pay); console.log('Success')}}
      onCancel={()=>{
        setPay(!pay)
        console.log('Payment Cancelled')}}
      autoStart={true}
      channels={['bank', 'card', 'mobile_money', 'qr', 'ussd']}
      />
  );
}

