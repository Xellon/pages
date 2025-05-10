/**
 * range(1,5) -> [1,2,3,4]
 * @param {number} start
 * @param {number} end
 */
export function* range(start, end) {
	for (let i = start; i < end; i++) {
		yield i;
	}
}
