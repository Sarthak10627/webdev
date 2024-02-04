/* Create a class named Counter with non-static property count and a member function increment
& -- Read the given instructions -- */

/* Code from here */
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

/* to here */

try { module.exports = { Counter } } catch (e) { }