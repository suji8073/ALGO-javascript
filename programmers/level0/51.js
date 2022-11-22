/* 배열 회전시키기
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다. */

function solution(numbers, direction) {
  var number = 0;
  if (direction === "right") {
    number = numbers[numbers.length - 1];
    numbers.unshift(number);
    numbers.pop();
  } else {
    number = numbers[0];
    numbers.shift();
    numbers.push(number);
  }
  return numbers;
}

function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
