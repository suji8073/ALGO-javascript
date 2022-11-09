/* 6. 자연수 뒤집어 배열로 만들기
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다. */

function solution(n) {
	const array = String(n).split("");
	const numberArray = [];
	array.map((item) => numberArray.push(Number(item)));
	return numberArray.reverse();
}

// 한 줄로 줄이기
function solution(n) {
	return String(n)
		.split("")
		.reverse()
		.map((item) => Number(item));
}

// 더 줄이기 !
function solution(n) {
	return n
		.toString()
		.split("")
		.reverse()
		.map((item) => parseInt(item));
}
