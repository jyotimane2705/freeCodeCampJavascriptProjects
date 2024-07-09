const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function checkPalindrome(input) {
  if (input === '') {
  return alert("Please input a value");
  
};
const originalInput = input;
const cleanInput =
input.replace(/\W/gi, '').toLowerCase()


if (cleanInput === [...cleanInput].reverse().join('')) {
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
  ${originalInput} is a palindrome`
 
}
else {
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
  ${originalInput} is not a palindrome`
}
}

checkButton.addEventListener('click', () => {
  checkPalindrome(inputText.value)
})