const converterButton = document.querySelector("#arabic-roman-button");
const inputArabic = document.querySelector("#input-arabic-number");
const inputRoman = document.querySelector("#input-roman-number");
const inputlabel = document.querySelector("#input-label");
const label = document.querySelector("#label");
const arrow = document.querySelector(".arrowChange");
const tilte = document.querySelector("#title-arabic-roman")
let arabicNum = true;
let romanNum =false;
arrow.addEventListener('click', e => {
     arabicNum=!arabicNum;
     romanNum=!romanNum;
     inputArabic.value = '';
     inputRoman.value = '';
     if(arabicNum === true) {
       inputlabel.textContent = "Arabic Number";
       label.textContent = "Roman Number";
       tilte.textContent = "Arabic Converter"
     }else {
      inputlabel.textContent = "Roman Number";
      label.textContent = "Arabic Number";
      tilte.textContent = "Roman Converter"
     }

})

converterButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(arabicNum == true) {
    const arabicNum = inputArabic.value;
    const result = toRomanNumbers(arabicNum);
    inputRoman.value = result;
    console.log(result)
  } else  {
    const romanNum = inputArabic.value;
    const result = toArabicNumbers(romanNum);
    inputRoman.value = result;
    console.log(result)
  }
  
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

function toArabicNumbers(input) {
  const romanNumbers = [[1,'I'],[5, 'V'], [10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M']];
  
  const charArr = input.split('');
  const reverseArr = charArr.reverse();
  let result = 0;
  let lastDigit = 0;
  reverseArr.forEach( element => {
      const arabicNumm = romanNumbers.find(o => o[1]=== element);

      if(lastDigit <= arabicNumm[0]) {
          result += arabicNumm[0];
        } else {
          result -= arabicNumm[0];
        }
        lastDigit = arabicNumm[0];
  })
  
  return result;
}

