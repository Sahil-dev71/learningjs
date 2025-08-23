function createDiv(child) {
  const div = document.createElement("div");
  div.appendChild(child);
  document.body.appendChild(div);
}
const image =
  "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg";
function createImageElement(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
//   img.setAttribute("height","200");
  createDiv(img);
}
createImageElement(image);
const api = "https://api.github.com/users/Sahil-dev71";
const xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open("GET", api,true);
console.log(xhr.readyState);
const data = xhr.responseText;
console.log(data);

// xhr.onreadystatechange = function () {
//   console.log(`Response text : ${xhr.readyState}\n ${xhr.responseText}`);
//   console.log(xhr.readyState);
//   console.log(` Header text is : ${xhr.readyState} \n${xhr.getAllResponseHeaders()}`);
// };
xhr.send();
// setTimeout(() => {
//     console.log(xhr.readyState);
//     console.log(xhr.responseText);
// }, 2000);

setTimeout(() => {
    // console.log(xhr.getAllResponseHeaders);
   if(xhr.readyState===4 && xhr.status===200){
     const data=JSON.parse(xhr.responseText);
    console.log(typeof data);
    console.log(data);
    
    createImageElement(data.avatar_url);
   }
   console.log("timeout sirr , yet not received the data");
   
}, 500);
