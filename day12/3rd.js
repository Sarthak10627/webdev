// you're give an async function getData and a url as its parameter
// you have to send a GET request to the url using fetch API
// and return the response in json format from the
// async function getData

async function getData(url) {
	// code here
    
    
    
    try {
    
    const response = await fetch(url);
    
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    
    return await response.json();
  } catch (error) {
    
    console.error('Error fetching data:', error.message);
    return null; 
  }
}



try { module.exports = { getData } } catch(e) {}
