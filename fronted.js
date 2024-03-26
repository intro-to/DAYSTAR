// frontend.js

const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');

// Fetch all items and display them
async function fetchItems() {
  try {
    const response = await axios.get('/items');
    const items = response.data;
    itemList.innerHTML = items.map(item => `<div>${item.name}, Quantity: ${item.quantity}</div>`).join('');
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

// Add a new item
itemForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('itemName').value;
  const quantity = document.getElementById('itemQuantity').value;
  try {
    await axios.post('/items', { name, quantity });
    fetchItems();
  } catch (error) {
    console.error('Error adding item:', error);
  }
});

// Initial fetch of items
fetchItems();
