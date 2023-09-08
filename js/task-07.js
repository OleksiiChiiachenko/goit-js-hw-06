 

 
const refInputChange = document.getElementById('font-size-control');
const changeText = document.getElementById('text');
 
const changeTextSize = ({ currentTarget }) =>
  (changeText.style.fontSize = `${currentTarget.value}px`);

refInputChange.addEventListener('input', changeTextSize);