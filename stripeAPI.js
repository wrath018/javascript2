

const userAction = async () => {
    const response = await fetch('https://js.stripe.com/v3/payment_links',{
        Stripe_api_key:"sk_test_51KtTD8SEH6UBCCzIZWDLw1ztx9dHR2uKOMfTUU1RkHGWOgOEpZmh7U6hMacJ4hsUNz8eweiaI6tGUjTas9fLZRVd00X3q1afRc",
        method:'POST',
        Stripe:"pk_test_51KtTD8SEH6UBCCzI6B5yZBYPn7U13c7lZq1xDaLaPp8ENcLEc7mEcT8IANtqaW1FUugXWlMw1Lf567KzIEzL3VNq00e4ekTk7a",
        
            lineItems:[
            {
                price:"price_1KtVzUSEH6UBCCzId1GFzJPJ",
                quantity:2,
            },
            ],
            mode:"no-cors",
            successUrl:"https://www.google.com",
             cancelUrl:"https://www.twitter.com",     
       
    });
//   # The colon prevents curl from asking for a password.);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
  }
  userAction();