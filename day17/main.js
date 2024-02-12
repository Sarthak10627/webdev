// console.log(privateVariable, publicVariable);  logging to console without using a fn.

// import { publicVariable} from "./somefile.js";
// console.log(publicVariable);

// console.log(publicVariable);  //it will give error 

// import abc from "./somefile.js";   //calling default export
// import defaultExport, {usefulFunction, anotherVariable} from "./somefile.js";
import { usefulFunction as usefulFromAnother } from "./anotherfile.js"


//all the imports in one statement
import * as everything from "./somefile.js"


console.log(everything);
everything.default(); 
// usefulFunction();
usefulFromAnother();
console.log({ anothter: everything.anotherVariable });
//also no curly braces required for default export
//for default  export u can use any name
//default exports can only be used once 
//named exports can be used as many times as possible