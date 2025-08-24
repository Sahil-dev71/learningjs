const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Console");
    let rej = false;
    if (!rej) {
      resolve({ name: "sahil", "roll no": 57 });
    } else {
      reject("Reject ki Testing");
    }
  }, 1000);
});
async function promisData() {
  const rollNo = await promiseOne.then((data) => {
    return data["roll no"];
  });
  console.log(rollNo);
}
// promisData();

// promiseOne
// .then((data)=>{
//     console.log("Then Console");
//     // console.log(data["roll no"]);
//     return data["roll no"];
// })
// .then((roll_no)=>{
//     console.log(`Roll No : ${roll_no}`);
// })
// .catch((reason)=>{
//     console.log("Then Console");
//     console.log(reason);

// })

async function fetchData() {
  try {
    console.log("hellllo");
    
    const respone = await fetch("https://api.github.com/users/Sahil-dev71");
    const data=await respone.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
