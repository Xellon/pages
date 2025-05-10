// @ts-check
import {
	LitElement,
	css,
	html,
	render,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

/** @typedef {import("./month.js").MonthDay} MonthDay */
/** @typedef {import("./month.js").Month} Month */
/** @typedef {import("./schedule.js").Schedule} Schedule */

const weekdays = ["P", "A", "T", "K", "P", "Š", "S"];
const headers = weekdays.map((d) => html`<th>${d}</th>`);

/**
 * @param {import("./month.js").DayMetadata} day
 */
function getDayClassName(day) {
	let className = day.dayType ?? "";
	if (day.isHoliday) {
		className += " holiday";
	}
	return className.trimStart();
}

/**
 * @param {MonthDay} day
 */
function getCellHtml(day) {
	return html`<span class=${getDayClassName(day.metadata)}>${day.day}</span>`;
}

/**
 * @param {Array<MonthDay?>} row
 * @returns
 */
function getRowHtml(row) {
	const cells = row.map((day) => html`<td>${day ? getCellHtml(day) : ""}</td>`);

	return html`<tr>${cells}</tr>`;
}

/**
 * @param {Month} month
 * @returns
 */
function getMonthTableHtml(month) {
	const rows = month.toMatrix().map(getRowHtml);

	return html`
    <table>
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

/**
 * @param {Month} month
 * @returns
 */
function getMonthHtml(month) {
	return html`
    <div class="month">
      <h2>${month.name}</h2>
      ${getMonthTableHtml(month)}
    </div>`;
}

/**
 * @param {number} year
 * @param {string?} name
 * @returns
 */
export function getYearHeaderHtml(year, name) {
	return html`
    <div class="header">
        <h1>${year}</h1>
        <span>${name ?? ""}</span>
    </div>`;
}

/**
 * @param {Schedule} schedule
 * @param {string?} name
 * @returns
 */
export function getYearHtml(schedule, name) {
	const months = schedule.months().map(getMonthHtml);

	return html`
    <div>
        ${getYearHeaderHtml(schedule.year, name)}
        ${months}
    </div>`;
}

/**
 * @param {Schedule[]} schedules
 * @param {string?} name
 * @returns
 */
export function getTimetableHtml(schedules, name) {
	const years = schedules.map((s) => getYearHtml(s, name));
	return html`${years}`;
}
