let insert=document.body.querySelector("#insert");
document.querySelector('body').addEventListener("keydown",(e)=>{
    console.log(e);
    e.preventDefault();
    insert.innerHTML=`
    <div>
    <table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})