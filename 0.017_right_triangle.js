function isRightTriangle(s, b, h) {
	return (s * s) + (b * b) === (h * h);
}

console.log(isRightTriangle(3,4,5));
console.log(isRightTriangle(6,8,10));
console.log(isRightTriangle(9,10,11));