/* 짝수는 싫어요
문제 설명
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100 */

// function solution(n) {
// 	var answer = [];
// 	for (var i = 1; i <= n; i += 2) {
// 		answer.push(i);
// 	}
// 	return answer;
// }

function solution(n) {
	return Array.from({ length: n }, (num, i) => (num = i + 1)).filter(
		(j) => j % 2 !== 0
	);
}
