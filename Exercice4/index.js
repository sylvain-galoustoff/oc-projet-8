const button = document.getElementById("myButton");
const message = "Bonjour, vous avez cliqué sur le bouton !";

button.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.append(message);
  button.insertAdjacentElement("afterend", paragraph);
});
