module.exports = function toReadable (number) {
  const space = ' '
  const hundred = 'hundred'
  const nums1to19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number == 0) {
    return 'zero'
  } else if (number > 0 && number < 1000) {
    if (number > 0 && number < 20) {
      return nums1to19[number]
    } else if (number >= 20 && number < 100) {
      const dozenNumFirst = Math.floor(number / 10)
      const dozenNumSecond = Math.floor(number % 10)
      return dozens[dozenNumFirst] + space + nums1to19[dozenNumSecond]
    }
  }
}
