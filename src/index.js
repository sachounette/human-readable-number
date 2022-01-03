module.exports = function toReadable (number) {
  const space = ' '
  const hundred = 'hundred'
  const firstNumber = Math.floor(number / 100)
  const additionalNumber = Math.floor(number % 100)
  const secondNumber = Math.floor(additionalNumber / 10)
  const thirdNumber = Math.floor(additionalNumber % 10)
  const dozenNumFirst = Math.floor(number / 10)
  const dozenNumSecond = Math.floor(number % 10)
  const nums1to19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number == 0) {
    return 'zero'
  } else if (number > 0 && number < 1000) {
    if (number > 0 && number < 20) {
      return nums1to19[number]
    } else if (number >= 20 && number < 100) {
      if (number % 10 == 0) {
        return dozens[dozenNumFirst]
      } else {
        const finalDozen = dozens[dozenNumFirst] + space + nums1to19[dozenNumSecond]
        return finalDozen
      }
    } else if (number >= 100 && number <= 999) {
      if (additionalNumber == 0) {
        return nums1to19[firstNumber] + space + hundred
      } else if (thirdNumber == 0 && secondNumber == 1) {
        return nums1to19[firstNumber] + space + hundred + space + nums1to19[additionalNumber]
      } else if (thirdNumber == 0) {
        return nums1to19[firstNumber] + space + hundred + space + dozens[secondNumber]
      } else if (additionalNumber > 0 && additionalNumber < 20) {
        return nums1to19[firstNumber] + space + hundred + space + nums1to19[additionalNumber]
      } else {
        return nums1to19[firstNumber] + space + hundred + space + dozens[secondNumber] + space + nums1to19[thirdNumber]
      }
    }
  }
}
