/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */

define(["N/ui/serverWidget", "N/http", "N/https"], function (
  serverWidget,
  http,
  https
) {
  function onRequest(context) {
    if (context.request.method === "GET") {
      // Create a form to collect payment details
      var form = serverWidget.createForm({
        title: "Payment Details",
      });

      form.addField({
        id: "phone_number",
        type: serverWidget.FieldType.PHONE,
        label: "Phone Number",
      });

      form.addField({
        id: "amount",
        type: serverWidget.FieldType.CURRENCY,
        label: "Amount",
      });

      form.addSubmitButton({
        label: "Send USSD Request",
      });

      context.response.writePage(form);
    } else if (context.request.method === "POST") {
      // Get the payment details from the form submission
      var phoneNumber = context.request.parameters.phone_number;
      var amount = context.request.parameters.amount;

      // Send the USSD request using the AfricasTalking API
      var url = "https://api.africastalking.com/ussd/send";
      var headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        apiKey: "YOUR_API_KEY",
        "Content-Length": "0",
      };
      var data = {
        username: "YOUR_USERNAME",
        phoneNumber: phoneNumber,
        amount: amount,
      };

      var response = https.post({
        url: url,
        headers: headers,
        body: data,
      });

      // Wait for confirmation from the user and
      // TODO: Implement confirmation logic

      context.response.write("USSD request sent successfully.");
    }
  }

  return {
    onRequest: onRequest,
  };
});
