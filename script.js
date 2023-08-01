//your code here
function removeArticles(bandName) {
  const articles = ['the', 'a', 'an'];
  const nameWords = bandName.split(' ');
  const filteredWords = nameWords.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

// Function to sort and display band names
function sortAndDisplayBandNames(bandNames) {
  // Sorting band names without articles
  bandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

  // Add sorted band names to the ul element
  const bandList = document.getElementById('band');
  bandList.innerHTML = ''; // Clear any previous items in the list
  bandNames.forEach(bandName => {
    const listItem = document.createElement('li');
    listItem.textContent = bandName;
    bandList.appendChild(listItem);
  });
}
