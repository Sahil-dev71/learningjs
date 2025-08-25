const api="https://api.github.com/users/Sahil-dev71";
fetchGit(api);

async function fetchGit(url) {
    const response= await fetch(url);
    // console.log(response["headers"].date);
    {/* 
       1.) Response have fixed schema means its properties and fields are fixed 
       2.) while Headers properties are not fixed they vary from server to server 
            thats why we can't use dot notation in that;   
        */}
    const headerData=response["headers"];
    // console.log(typeof headerData);
    // console.log(headerData.date);
    console.log(headerData.get("date"));
    
    
    console.log(typeof response);
    
}