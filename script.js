const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const cleanString = (str) => {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, "");
};

const reversedString = (str) => {
  const strArray = str.split("");
  strArray.reverse();
  const reversedStr = strArray.join("");
  return reversedStr;
};

const process = () => {
  const textValue = textInput.value;

  if (textValue.length === 0) {
    alert("Please input a value");
    console.log("empty");
  } else {
    result.style.display = "block";

    const cleanValue = cleanString(textValue);
    const cleanReversedStr = reversedString(cleanValue);

    if (cleanValue.toLowerCase() === cleanReversedStr.toLowerCase()) {
      result.innerHTML = `<p><span class="result-value">${textValue}</span> is a palindrome</p><svg class="blue" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-480v80q0 66 47 113t113 47q66 0 113-47t47-113v-80H320Zm160 180q-42 0-71-29t-29-71v-20h200v20q0 42-29 71t-71 29ZM340-680q-38 0-67.5 27.5T231-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T340-680Zm280 0q-38 0-67.5 27.5T511-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T620-680ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>`;
    } else {
      result.innerHTML = `<p><span class="result-value">${textValue}</span> is not a palindrome</p><svg class="red" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-420q-68 0-123.5 38.5T276-280h408q-25-63-80.5-101.5T480-420Zm-168-60 44-42 42 42 42-42-42-42 42-44-42-42-42 42-44-42-42 42 42 44-42 42 42 42Zm250 0 42-42 44 42 42-42-42-42 42-44-42-42-44 42-42-42-42 42 42 44-42 42 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>`;
    }
  }
};

checkButton.addEventListener("click", process);
