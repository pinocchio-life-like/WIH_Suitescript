/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(["N/ui/dialog"], function (dialog) {
  function pageInit(context) {
    // Add a button to the form that triggers the employee name prompt
    var form = context.form;
    form.addButton({
      id: "custpage_get_employee_name",
      label: "Get Employee Name",
      functionName: "getEmployeeName",
    });
  }

  function getEmployeeName() {
    // Use NetSuite's dialog module to prompt the user for the employee name
    dialog.prompt({
      title: "Enter Employee Name",
      label: "Employee Name",
      type: dialog.FieldType.TEXT,
      onAction: function (value) {
        if (value) {
          // Display a welcome message with the entered employee name
          dialog.alert({
            title: "Welcome",
            message: "Welcome," + value,
          });
        }
      },
    });
  }

  return {
    pageInit: pageInit,
    getEmployeeName: getEmployeeName,
  };
});
