/* 21. 약수의 개수와 덧셈
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000 */

function solution(left, right) {
	var sum = 0;
	var j = 0;
	var count = 0;
	while (right - left - j + 1 > 0) {
		count = 0;
		for (var i = 1; i <= left + j; i++) {
			if ((left + j) % i === 0) count++;
		}
		count % 2 === 0 ? (sum += left + j) : (sum -= left + j);
		j++;
	}
	return sum;
}

// 제곱근이 정수이면 약수의 개수가 짝수이고, 정수가 아니면 약수의 개수가 홀수이다.
function solution1(left, right) {
	var answer = 0;
	for (let i = left; i <= right; i++) {
		if (Number.isInteger(Math.sqrt(i))) {
			answer -= i;
		} else {
			answer += i;
		}
	}
	return answer;
}
