


// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const h2 = document.getElementById('jokeContainer');
const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  try {
  const getJoke = await fetch(API_URL, myObject);
  const joke = await getJoke.json()
  return h2.innerHTML = joke.joke;
  } 
  catch (e) {
    console.error(e)
  }

  }


window.onload = () => fetchJoke();