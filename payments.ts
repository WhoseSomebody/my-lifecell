interface PaymentMethodInterface {
  credentials : {};
  createPaymentAccount();
  authorizePayment();
  unauthorizePayment();
  acceptPayment();
  refundPayment();
  transfer();
  cancelTransfer();

  createPlan();
  listPlans();
  subscribe();
  getSubscriptionDetails();
  updateSubscription();
  suspendSubscription();
  reactivateSubscription();
  cancelSubscribtion();
  getSubscriptionTransactions();
}

interface StripePaymentInterface extends PaymentMethodInterface {
    
}
interface PaypalPaymentInterface extends PaymentMethodInterface {
}
interface BraintreePaymentInterface extends PaymentMethodInterface {
  
}

class StripePayment implements StripePaymentInterface {
  credentials : {};
  createPaymentAccount() {};
  authorizePayment() {};
  unauthorizePayment() {};
  acceptPayment() {};
  refundPayment() {};
  transfer() {};
  cancelTransfer() {};
  createPlan() {};
  subscribe() {};
  getSubscriptionDetails() {};
  updateSubscription() {};
  suspendSubscription() {};
  reactivateSubscription() {};
  cancelSubscribtion() {};
  getSubscriptionTransactions() {};
}

class PaypalPayment implements PaypalPaymentInterface {
  credentials = {
     api_key: ''
  };
  createPaymentAccount() {
    // Creates account in our DB

    
  };
  updatePaymentAccount() {
    // creating billing agreement for subscriptions
    // https://developer.paypal.com/docs/integration/direct/billing-plans-and-agreements/

    // Attach card, choose default etc
    // adding card to the PayPal vault for card-payments
    // https://developer.paypal.com/docs/api/vault/#credit-card_create
  };
  authorizePayment() {
    // For PayPal payment authorizations, you must enable this feature on your PayPal account.
    // https://developer.paypal.com/docs/integration/direct/payments/authorize-and-capture-payments/
    // OR reauthorize payment https://developer.paypal.com/docs/api/payments/#authorization_reauthorize
    // Reauthorization can be done only once from 4th to 29th day for same authorization.
  };  
  unauthorizePayment() {
    // Void an authorization. Fully or if authorization was partly charged - partly. 
    // If payment authorization was fully charged there is no way to cancel authorization.
    // https://developer.paypal.com/docs/api/payments/#authorization_void 
  };
  acceptPayment() {
    // Capture an authorized payment OR authorize and then capture
    //  https://developer.paypal.com/docs/integration/direct/payments/authorize-and-capture-payments/#capture-an-authorized-payment
  };
  refundPayment() {
    // Refund captured payment fully or partially.
    // https://developer.paypal.com/docs/api/payments/#capture_refund
  };
  transfer() {
    // You must have a PayPal business account to execute Payouts.
    // You can make payouts to one or more PayPal accounts.
    // https://developer.paypal.com/docs/api/payments.payouts-batch/#payouts_create
  };
  cancelTransfer() {
    // Cancels an unclaimed transaction. If no one claims the unclaimed item within 30 days,
    // the funds are automatically returned to the sender. 
    // https://developer.paypal.com/docs/api/payments.payouts-batch/#payouts-item_cancel
  };
  listPlans() {
    // https://developer.paypal.com/docs/api/payments.billing-plans#plan_list
  };
  createPlan() {
    // 2.	Required	Create a plan.
    // 3.	Required	Activate a plan.
    // https://developer.paypal.com/docs/integration/direct/billing-plans-and-agreements/#integration-steps
  };
  subscribe() {
    // 4.	Required	Create an agreement.
    // 5.	Required for PayPal payments only	Get customer approval.
    // 6.	Required for PayPal payments only	Execute an agreement.
    // So it contains two stages: Create a subscription and after user approval Execute it. (https://developer.paypal.com/docs/integration/direct/billing-plans-and-agreements/#execute-an-agreement)
    // https://developer.paypal.com/docs/integration/direct/billing-plans-and-agreements/#integration-steps
  };
  getSubscriptionDetails() {
    // https://developer.paypal.com/docs/api/payments.billing-agreements#agreement_get
  };
  updateSubscription() {
    // https://developer.paypal.com/docs/api/payments.billing-agreements#agreement_update
  };
  suspendSubscription() {
    // https://developer.paypal.com/docs/api/payments.billing-agreements#agreement_suspend
  };
  reactivateSubscription() {
    // https://developer.paypal.com/docs/api/payments.billing-agreements#agreement_re-activate
  };
  cancelSubscribtion() {
    // https://developer.paypal.com/docs/integration/direct/billing-plans-and-agreements/#execute-an-agreement
  };
  getSubscriptionTransactions() {
    // https://developer.paypal.com/docs/api/payments.billing-agreements#agreement_transactions
  };
}

class BraintreePayment implements BraintreePaymentInterface {
  credentials : {};
  createPaymentAccount() {
    // Belong to a customer, are securely stored in the Braintree 
    // Vault, and have a paymentMethodToken attribute that you can 
    // store on your servers (with reduced PCI compliance burden) 
    // and later use to create transactions.
  };
  authorizePayment() {};
  unauthorizePayment() {};
  acceptPayment() {};
  refundPayment() {};
  transfer() {};
  cancelTransfer() {};
  createPlan() {};
  subscribe() {};
  getSubscriptionDetails() {};
  updateSubscription() {};
  suspendSubscription() {};
  reactivateSubscription() {};
  cancelSubscribtion() {};
  getSubscriptionTransactions() {};
}