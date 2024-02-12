// // IFFE - immediately invoked fuction expression
// // creating a function and executing it right there
// // publicProps is an eg

// //object revealing pattern : only making certain parts visible
// // or we can say we type of restricted  
// let publicProps = (function () { 
//     let publicVariable = 10;
//     let privateVariable = 20;   
//     return{
//         value: publicVariable
//     }
// })()

// // let privateVariable = 20;  when we declare and 
// // let publicVariable = 10;   access them through main.js without making a fn.


// console.log(publicProps);
let publicVariable = 10;
let privateVariable = 20;
export let anotherVariable = 30;

export function usefulFunction(){       //named export
    console.log("this is a useful function");
}

function defaultExport(){
    console.log("this is a default export");
}

// export default defaultExport(){};   //for default export we dont need 
export default defaultExport;       //curly braces