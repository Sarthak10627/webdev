// `arr` parameter of function `getFrequencyMap` 
// is an array of duplicate integers
// Create a Map that contains count of every number that exists in 
// the array `arr` and return it via function `getFrequencyMap`


function getFrequencyMap(arr) {
	// code here
    const frequencyMap = new Map();
  

  arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });
  
  
  return frequencyMap;

}


try { module.exports = { getFrequencyMap } } catch(e) {}