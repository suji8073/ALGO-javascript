/* 가장 큰 수 찾기
문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다. */

function solution(array) {
  var bigNum = array[0];
  var index = 0;

  for (var i = 1; i < array.length; i++) {
    if (bigNum < array[i]) {
      bigNum = array[i];
      index = i;
    }
  }
  return [bigNum, index];
}

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
