  //session-duraction of time upto which a tab ib browser is opened
 //session storage - use to set some default value to be 
 //displayed even after the screen is refreshed
 
// document.addEventListener("DOMContentLoaded", ()=> {
//     document.getElementById("name").value = sessionStorage.getItem("name")?? "";
//     document.getElementById("save").addEventListener("click",()=>{
//         const name = document.getElementById("name").value;
//         sessionStorage.setItem("name",name);
//         console.log(name);
//     })
//  })


//local storage - information remains in the memory of the
//browser even after the tab is closed
//localStorage.clear()

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("name").value = localStorage.getItem("name")?? "";
    document.getElementById("save").addEventListener("click",()=>{
        const name = document.getElementById("name").value;
        localStorage.setItem("name",name);
        console.log(name);
    })
 })