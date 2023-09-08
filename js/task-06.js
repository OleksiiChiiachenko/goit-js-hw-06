 
const refsInp = document.getElementById('validation-input');
refsInp.addEventListener('blur', onBrdClrBlur);

 

function onBrdClrBlur(event) {
  const inpDataLength = Number(refsInp.dataset.length);
  const inpValueLength = Number(refsInp.value.trim().length);

  if (inpDataLength === inpValueLength) {
    refsInp.classList.add('valid');
    refsInp.classList.remove('invalid');
  } else {
    refsInp.classList.remove('valid');
    refsInp.classList.add('invalid');
  }
};
 