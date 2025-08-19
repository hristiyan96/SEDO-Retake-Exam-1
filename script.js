// Existing apply button logic
document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

// 🔹 Utility function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 🔹 Event listener for the Random Color button
document.getElementById('randomColorBtn')
  .addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.getElementById('box').style.backgroundColor = randomColor;
  });
