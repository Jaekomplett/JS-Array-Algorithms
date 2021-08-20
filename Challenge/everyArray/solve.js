function solution(inputArray) {
  return inputArray.every(el => el % 2 === 0);
  // .every()는 배열의 모든 원소가 조건에 맞는지 검사하는 메서드입니다. 

  // 모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환합니다.
  // 배열의 원소를 오름차순으로 검사하고, 조건을 만족하지 않는 원소가 있으면 
  // 검사를 중지하고 false를 반환합니다. 모든 원소를 다 검사했는데 
  // 조건을 만족하지 않는 원소가 없으면 true를 반환합니다.
  // 원소가 없는 빈 배열은, 조건은 만족하지 않는 원소가 없으므로 무조건 true를 반환합니다.

}


exports.solution = solution;
