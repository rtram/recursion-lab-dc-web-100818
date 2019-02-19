function printString(string) {
  console.log(string[0])
  
  if (string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let substring = string.substring(0, string.length -1)
    return string[string.length - 1] + reverseString(substring)
  } else {
    return string[0]
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] === string[string.length - 1]) {
      let substring = string.substring(1, string.length - 1)
      return isPalindrome(substring)
    } else {
      return false
    }
  } else {
    return true
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    let subArray = array.slice(1, array.length)
    return array[0] + addUpTo(subArray, index - 1)
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if (array.length > 1) {
    let copyArray = array.slice()
    if (array[0] > array[1]) {
      copyArray.splice(1, 1)
    } else {
      copyArray.shift()
    }
    return maxOf(copyArray)
  } else {
    return array[0]
  }
}

function includesNumber(array, number) {
  // console.log('array', array, 'number', number)
  if (array.length >= 1) {
    if (array[0] === number) {
      return true
    } else {
      let copyArray = array.slice()
      copyArray.shift()
      return includesNumber(copyArray, number)
    }
  } else {
    return false
  }
}