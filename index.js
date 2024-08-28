let value;

function handleEncrypt() {
  const message = document.querySelector("textarea");

  value = message.value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector(".message").innerHTML = `
        <p>${value}</p>
        <button class="copy-button" onclick="handleCopy()">Copiar</button>
      `;

  message.value = "";
}

function handleDecrypt() {
  const message = document.querySelector("textarea");

  value = message.value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.querySelector(".message").innerHTML = `
        <p>${value}</p>
        <button class="copy-button" onclick="handleCopy()">Copiar</button>
      `;

  message.value = "";
}

function handleCopy() {
  const textToCopy = value;
  navigator.clipboard.writeText(textToCopy);

  const messageContainer = document.querySelector(".message");

  const alertElement = document.createElement("p");
  alertElement.className = "alert";
  alertElement.textContent = "Texto copiado al portapapeles";

  messageContainer.appendChild(alertElement);

  alertElement.addEventListener("animationend", () => {
    messageContainer.removeChild(alertElement);
  });
}
