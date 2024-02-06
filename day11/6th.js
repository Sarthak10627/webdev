// you're given `object` as parameter to function devsnest
// object definition is there in instructions
// you have to return `object.person.name`
// but either of object, object.person, object.person.name
// can be undefined
// Note: use Optional Chaining to complete this task

function devsnest(object) {
    // code here
    return object?.person?.name;

}


try { module.exports = { devsnest } } catch(e) {}
