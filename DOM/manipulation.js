const heading = document.querySelector("h1");
heading.setAttribute("class", "heading");
heading.style.backgroundColor = "red";
heading.style.color = "blue";

//-------------  function for Creating an Element in DOM  --------------

function createElemnt(text, height, paragraph) {
  const div = document.createElement("div");
  div.setAttribute("class", "function div", "id", "f-div");
  div.style.backgroundColor = "green";
  div.style.color = "white";
  div.style.fontSize = `${height}px`;
  const nodeText = document.createTextNode(text);
  div.appendChild(nodeText);
  document.body.appendChild(div);
  // children of div
  const child = document.createElement("p");
  const childTextNode = document.createTextNode(paragraph);
  child.appendChild(childTextNode);
  child.style.fontSize = "20px";
  child.style.color = "white";
  div.appendChild(child);
}
const text1 = "This is conforming text";
const para = "I am totally blank what i should write in this paragraph";
createElemnt(text1, 40, para);
