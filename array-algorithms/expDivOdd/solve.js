function solution(inputArray) {
  // [1,2,3,4]
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]^2 % 3 === 1) {
      return inputArray.reduce((a,b) => a+b)
    }
  }
}

exports.solution = solution;

// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
