const converterButton = document.querySelector("#arabic-roman-button");
const inputArabic = document.querySelector("#input-arabic-number");
const inputRoman = document.querySelector("#input-roman-number");

converterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const arabicNum = inputArabic.value;
  const result = toRomanNumbers(arabicNum);
  inputRoman.value = result;
  console.log(result)
});

function toRomanNumbers(input) {
  const romanTen = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const secondDigit = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const thirdDigit = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const fourthDigit = ['','M', 'MM', 'MMM'];

  const sNumber = input.toString();
  const numberArr = [];
  
  for(let i = 0; i<sNumber.length; i++) {
    numberArr.push(sNumber.charAt(i));
  }
  
  if (input <= 0) {
    return false;
  }
  if (input < 10) {
    return romanTen[Number(numberArr[0])];
  }
  if(input <= 99) {
    return secondDigit[Number(numberArr[0])] + romanTen[numberArr[1]];
  }
  if(input >= 100 && input <= 999) {
    return thirdDigit[Number(numberArr[0])] + secondDigit[Number(numberArr[1])] + romanTen[Number(numberArr[2])]; 
  }
  if(input >= 1000 && input <= 3000) {
    return fourthDigit[Number(numberArr[0])] + thirdDigit[Number(numberArr[1])] + secondDigit[Number(numberArr[2])] + romanTen[Number(numberArr[3])];    
  }   
  
}
