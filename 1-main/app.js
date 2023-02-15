function bigWords(string, array) {
  return array.filter((element) => element.length > string.length);
}

function printArray(array) {
  const ul = document.getElementById("list");
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(array[i]));
    ul.appendChild(li);
  }
}

const myArray = ['matrix', 'trinity', 'morpheus', 'mouse', 'switch', 'oracle'];
const resultArray = bigWords('net', myArray);
printArray(resultArray);
