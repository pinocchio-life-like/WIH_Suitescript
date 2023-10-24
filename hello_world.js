/**
 NApiVersion 2.0
 NScriptType ClientScript
 */

define(["N/ui/dialog"], function (dialog) {
  function helloworld() {
    var options = {
      title: "Hello",
      message: "World!",
    };

    try {
      dialog.alert(options);
    } catch (e) {}
  }
});
