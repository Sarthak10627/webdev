// you're given an arr as parameter to the function `includesEven`
// use Array.some() to check if there exists any even number in
// the array `arr`
// and return the result from the function `includesEven`


function includesEven(arr) {
	// code here
	return arr.some(num => num % 2 === 0);

}


try { module.exports = { includesEven } } catch(e) {}