// @ts-check
import { render } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { getYearHtml } from "./rendering.js";
import { generate } from "./engine.js";

function main() {
	const timetablesSection = document.getElementById("timetables");

	if (!timetablesSection) {
		return;
	}

	const schedules = generate(
		{
			evening_start_date: { year: 2025, month: 5, day: 11}, 
			morning_start_date: { year: 2025, month: 5, day: 5}, 
			name: "Erika",
		}, 
		{ years: [2025, 2026] });
	render(
		schedules.map(s => getYearHtml(s, "Erika")), 
		timetablesSection);
}

main();
