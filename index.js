function toArabicNumbers(input) {
    const romanNumbers = [[1,'I'],[5, 'V'], [10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M']];
    
    const charArr = input.split('');
    const reverseArr = charArr.reverse();
    let result = 0;
    let lastDigit = 0;
    reverseArr.forEach( element => {
        const arabicNumm = romanNumbers.find(o => o[1]=== element);
          console.log(arabicNumm[0]);
          if(lastDigit <= arabicNumm[0]) {
            result += arabicNumm[0];
          } else {
            result -= arabicNumm[0];
          }
          lastDigit = arabicNumm[0];
    })
    
    return result;
}
console.log(toArabicNumbers('MMMII'));
module.exports.toArabicNumbers = toArabicNumbers;