module.exports = function toReadable (number) {
  function toReadableMin(minArray) {
    let result = [];
    let reverseMinArray = minArray.reverse();
    let start = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    if (minArray.length === 3 && reverseMinArray[2] !== '0') {
      result.push(start[reverseMinArray[2]] + ' hundred');
    }
    if (0 <= Number(reverseMinArray[1]) && Number(reverseMinArray[1]) <= 1) {
      result.push((minArray.length === 3) 
        ? start[Number(reverseMinArray[1] + reverseMinArray[0])] 
        : start[Number(reverseMinArray[1] + reverseMinArray[0])]);
      return result.filter(item => item != '').join(' ');
    }
    if (2 <= Number(reverseMinArray[1])) {
        result.push((minArray.length === 2)
          ? ten[reverseMinArray[1]]
          : ten[reverseMinArray[1]]);
    }
    result.push((minArray.length === 1) ? start[Number(reverseMinArray[0])] : start[Number(reverseMinArray[0])]);
  
    return result.filter(item => item != '').join(' ');
  }
  
  let numberInWords = [];
  let bigNumbers = [ '', 'thousand', 'million', 'billion', 'trillion'];
  let numberArray = number.toString().split('');// число переводим в массив цифр

  numberOfTriplets = Math.ceil(numberArray.length / 3)// количество троек

  for (let i = 0; i < numberOfTriplets; i++) {
    let subArray = numberArray.splice(-3, 3);
    numberInWords.unshift(bigNumbers[i]);
    numberInWords.unshift(toReadableMin(subArray));
  }
  return numberInWords.filter(item => item != '').join(' ');
}
