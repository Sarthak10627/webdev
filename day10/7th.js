/* Create a function getPerson, that have name, age, isEmployed
assign isEmployed a default value false
and return the details in form of a javascript object like given in the example in instructions */

/* Code from here */
function getPerson(name, age, isEmployed = false) {
    return {
        name: name,
        age: age,
        isEmployed: isEmployed
    };
}


/* to here */

try { module.exports = { getPerson } } catch (e) { } 