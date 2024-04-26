function addInputField() {
    var container = document.getElementsByClassName("form-inner");
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "dynamicInput";
    container.appendChild(document.createElement("br")); // Add a line break
    container.appendChild(inputField);
  }