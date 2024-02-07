// `persons` is an array of object `person` 
// (definition of `person` given in instructions)
// you have to return an array containing names of 
// persons with salary less than 30000
// use Array.map() and Array.filter() for this task


function getNames(persons) {
	// code here
	const filteredPersons = persons.filter(person => person.salary < 30000);
const names = filteredPersons.map(person => person.name) 
  return names;

}

try { module.exports = { getNames } } catch(e) {}