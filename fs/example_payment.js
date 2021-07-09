{
    method: "POST",
    url: "https://prod.emea.api.fiservapps.com/sandbox/ipp/payments-gateway/v2/payments/",
    headers: {
      "Content-Type": "application/json",
      "Client-Request-Id": "Client request ID goes here",
      "Api-Key": "API Key goes here",
      "Timestamp": "Date().getTime() goes here",
      "Message-Signature": "Message Signature goes here"
    },
    body: JSON.stringify({
      requestType: "PaymentCardSaleTransaction",
      transactionAmount: { total: "13", currency: "GBP" },
      paymentMethod: {
        paymentCard: {
          number: "4012000000000001",
          securityCode: "123",
          expiryDate: { month: "01", year: "29" }
        },
      },
      authenticationRequest: {
        authenticationType: "Secure3D21AuthenticationRequest",
        termURL: "http://localhost:3124/api/v1/payments/3ds",
        challengeIndicator: "04"
      },
    })
  }