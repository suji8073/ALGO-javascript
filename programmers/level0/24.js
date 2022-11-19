/* 짝수 홀수 개수
문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000 */

function solution(num_list) {
	const result = num_list.filter((num) => num % 2 === 0).length;
	return [result, num_list.length - result];
}

function solution(num_list) {
	const result = [0, 0];
	num_list.map((num) => (result[num % 2] += 1));
	return result;
}
