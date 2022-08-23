export function time<T>(fn: () => T, label: string): T {
	const start = performance.now();

	const fnReturn = fn();

	const end = performance.now();

	console.log(
		`%cFunction %c"${label}" %ctook: ${end - start} ms.`,
		"color: brown",
		"color: blue",
		"color: brown",
	);

	return fnReturn;
}
