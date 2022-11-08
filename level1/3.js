/* 3. 약수의 합
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 조건
n는 0 이상 3000 이하인 정수입니다. */

function solution(n) {
  var answer = 0;
  var i;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
