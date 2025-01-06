const form = document.getElementById('dictionary-form');
const wordInput = document.getElementById('word');
const definitionDiv = document.getElementById('definition');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const word = wordInput.value;
  const apiKey = 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/?entry=mask'; // Replace with your actual API key
  const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+word;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.length > 0) {
      const definition = data[0].meanings[0].definitions[0].definition;
      definitionDiv.innerHTML =`<b>Definition:</b> ${definition}`;
    } else {
      definitionDiv.innerHTML = 'No definition found.';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    definitionDiv.innerHTML = 'An error occurred.';
  }
});
