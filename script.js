// frontend.js

const sitterForm = document.getElementById('sitterForm');
const sitterList = document.getElementById('sitterList');

// Fetch all sitters and display them
async function fetchSitters() {
  try {
    const response = await axios.get('/sitters');
    const sitters = response.data;
    sitterList.innerHTML = sitters.map(sitter => `<div>${sitter.name}, ${sitter.age}</div>`).join('');
  } catch (error) {
    console.error('Error fetching sitters:', error);
  }
}

// Add a new sitter
sitterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  try {
    await axios.post('/sitters', { name, age });
    fetchSitters();
  } catch (error) {
    console.error('Error adding sitter:', error);
  }
});

// Initial fetch of sitters
fetchSitters();
