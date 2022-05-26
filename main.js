// kiểm tra số tăng dần

import { faL } from '@fortawesome/free-solid-svg-icons'

function isIncreasingNumber(n) {
  if (!Number(n) || n < 0) return

  let remaining = n

  while (remaining > 10) {
    let lastNumber = remaining % 10
    remaining = Math.trunc(remaining / 10)

    let prevNumber = remaining % 10

    if (prevNumber >= lastNumber) {
      return false
    }
  }

  return true
}

console.log(isIncreasingNumber(123))

// kiểm tra số giảm dần

function isDecreasingNumber(n) {
  if (!Number(n) || n < 0) return

  let remaining = n

  while (remaining > 10) {
    let lastNumber = remaining % 10
    remaining = Math.trunc(remaining / 10)

    let prevNumber = remaining % 10

    if (prevNumber <= lastNumber) {
      return false
    }
  }

  return true
}

console.log(isDecreasingNumber(321))

//

function isIncreasingNumberDistance(n, x) {
  let remaining = n

  while (remaining > 10) {
    let lastNumber = remaining % 10
    remaining = Math.trunc(remaining / 10)

    let prevNumber = remaining % 10

    if (lastNumber - prevNumber !== x) {
      return false
    }
  }

  return true
}

console.log(isIncreasingNumberDistance(135, 1))

//

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(11))
console.log(isPrime(3))
console.log(isPrime(4))

//

function isPerfectSquare(n) {
  const sqrt = Math.sqrt(n)

  if (sqrt * sqrt === n) {
    return true
  }

  return false
}

console.log(isPerfectSquare(5))
//

function isPerfectNumber(n) {
  let res = 0
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      res += i
    }
  }

  return true ? res === n : false
}

console.log(isPerfectNumber(8))

//
function isDivisableBy10(n) {
  let remaining = n
  let res = 0

  while (remaining > 0) {
    let lastNumber = remaining % 10

    remaining = Math.trunc(remaining / 10)

    res += lastNumber
  }

  if (res % 10 === 0) {
    return true
  }
  return false
}

console.log(isDivisableBy10(123455))

//

function hasEvenNumberGeaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return
  let evenArr = []

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i]

    if (number % 2 === 0) {
      evenArr.push(number)
    }
  }

  let max = evenArr[0]

  for (let i = 0; i < evenArr.length; i++) {
    if (evenArr[i] > max) {
      max = evenArr[i]
    }
  }

  if (max > n) {
    return true
  }

  return false
}

console.log(hasEvenNumberGeaterThanN([2, 3, 4], 5))
console.log(hasEvenNumberGeaterThanN([2, 3, 4, 6], 5))

//

function hasOddNumberDivisibleBy3(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i]
    if (number % 3 !== 0) {
      continue
    }

    if (number % 3 === 0) return true
  }

  return false
}

console.log(hasOddNumberDivisibleBy3([1, 5, 7]))
console.log(hasOddNumberDivisibleBy3([1, 6]))

//

function isIncreasingNumberList(numberList) {
  if (numberList.length < 2) return

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1]
    let currNumber = numberList[i]

    if (prevNumber >= currNumber) {
      return false
    }
  }

  return true
}

console.log(isIncreasingNumberList([1, 1]))
console.log(isIncreasingNumberList([1, 2]))
console.log(isIncreasingNumberList([2, 1]))

//

function isDecreasingNumberList(numberList) {
  if (numberList.length < 2) return

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1]
    let currNumber = numberList[i]

    if (prevNumber <= currNumber) {
      return false
    }
  }

  return true
}

console.log(isDecreasingNumberList([1, 1]))
console.log(isDecreasingNumberList([1, 2]))
console.log(isDecreasingNumberList([2, 1]))

//

function isSymmetricList(numberList) {
  let numberListString = numberList.toString()
  let numberListReverString = numberList.reverse().toString()

  if (numberListString === numberListReverString) return true

  return false
}

console.log(isSymmetricList([1, 2, 2, 1]))
console.log(isSymmetricList([1, 2, 3, 1]))

//

function findMinPositive(numberList) {
  let arr = []

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i]

    if (number < 0) continue

    arr.push(number)
  }

  return Math.min(...arr)
}

console.log(findMinPositive([-1, -5, 2, 6]))

//

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return ''

  let result = ''

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i]

    if (word.length > 5 || word.includes(' ')) {
      continue
    }

    result = word
    break
  }

  return result
}

console.log(findLongestWord(['super', 'super cool']))
console.log(findLongestWord(['super', 'cool']))

//

function findFirstPositiveEven(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      return numberList[i]
    }
  }
}

console.log(findFirstPositiveEven([1, 4, 5]))
console.log(findFirstPositiveEven([1, 3, 5]))

//

function findLastNegativeOdd(numberList) {
  let res
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0 && numberList[i] % 3 !== 0) {
      res = numberList[i]
    }
  }

  return res
}

console.log(findLastNegativeOdd([-1, -3, -5]))
console.log(findLastNegativeOdd([1, 3, 5]))

//

function findNumbers(numberList) {
  let array = []

  for (let i = 1; i < numberList.length; i++) {
    let prev = numberList[i - 1]
    let curr = numberList[i]

    if (prev < curr) {
      array.push(curr)
    }
  }

  console.log(array)
}

console.log(findNumbers([2, 5, 3, 7]))

//
function findAllNumbers(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i]

    let res = getFirstNumber(number)

    if (res % 2 !== 0) {
      return number
    }
  }
}

function getFirstNumber(n) {
  let remaining = n
  let res
  while (remaining > 10) {
    let last = remaining % 10
    remaining = Math.trunc(remaining / 10)
    let prev = remaining % 10

    res = prev
  }

  return res
}

console.log(findAllNumbers([234, 421, 123]))
