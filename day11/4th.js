// you are given a variable value as parameter of 
// function devsnest, value can also be null
// in case value is null return string 'value is null' 
// from the function devsnest
// Note: 
// you have to useNullish coalescing operator (??) for this task


function devsnest(value) {
    // code here
   return value ?? 'value is null';
 
 }
 
 
 try { module.exports = { devsnest } } catch(e) {}
 