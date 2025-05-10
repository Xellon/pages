// @ts-check
import { range } from "./utils.js";

export const dayMs = 1000 * 60 * 60 * 24;
export const sunday = 0;

/**
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
export function daysDiff(date1, date2) {
	const dayDiff = (date2.getTime() - date1.getTime()) / dayMs;
	return Math.round(dayDiff);
}

/**
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function getDaysInMonth(year, month) {
	const nextMonthDate = new Date(
		month === 11 ? year + 1 : year,
		month === 11 ? 0 : month + 1,
		1,
		0,
		0,
		0,
		0,
	);
	const currentDate = new Date(year, month, 1, 0, 0, 0, 0);

	return daysDiff(currentDate, nextMonthDate);
}

/**
 * @param {PlainDate} date
 * @returns {Date}
 */
export function toDate(date) {
	return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
}

/**
 * @param {PlainDate} date
 * @returns {boolean}
 */
export function isHoliday(date) {
	return (
		(date.month === 1 && date.day === 1) ||
		(date.month === 2 && date.day === 16) || // Independency
		(date.month === 3 && date.day === 11) || // Independency
		(date.month === 5 && date.day === 1) || // Worker's day
		isFathersDay(date) ||
		isMothersDay(date) ||
		(date.month === 6 && date.day === 24) || // Jonines
		(date.month === 7 && date.day === 6) || // Mindaugo diena
		(date.month === 8 && date.day === 15) || // Zolines
		(date.month === 11 && date.day === 1) || // Visu mirusiu diena
		(date.month === 11 && date.day === 2) || // Velines
		(date.month === 12 && date.day === 24) || // Kucios
		(date.month === 12 && date.day === 25) || // Kaledos 1
		(date.month === 12 && date.day === 26) || // Kaledos 2
		isEaster(date)
	);
}

/**
 * @param {PlainDate} date
 * @returns {boolean}
 */
function isMothersDay(date) {
	return date.month === 5 && date.day === getFirstSunday(date);
}

/**
 * @param {PlainDate} date
 * @returns {boolean}
 */
function isFathersDay(date) {
	return date.month === 6 && date.day === getFirstSunday(date);
}

/**
 * @param {PlainDate} date
 * @returns {boolean}
 */
function isEaster(date) {
	const year = date.year;

	const a = year % 19;
	const b = year >> 2;
	const c = Math.floor(b / 25) + 1;
	let d = (c * 3) >> 2;
	let e = (a * 19 - Math.floor((c * 8 + 5) / 25) + d + 15) % 30;
	e += (29578 - a - e * 32) >> 10;
	e -= ((year % 7) + b - d + e + 2) % 7;
	d = e >> 5;
	const e_day = e - d * 31;
	const e_month = d + 3;

	const e_date = new Date(date.year, e_month - 1, e_day);
	const next_e_date = new Date(e_date.getTime() + dayMs);

	return (
		(date.month === e_date.getMonth() + 1 && date.day === e_date.getDate()) ||
		(date.month === next_e_date.getMonth() + 1 &&
			date.day === next_e_date.getDate())
	);
}

/**
 * @param {PlainDate} date
 */
function getFirstSunday(date) {
	const daysInMonth = getDaysInMonth(date.year, date.month - 1);
	const foundDay = range(1, daysInMonth + 1).find(
		(day) => new Date(date.year, date.month - 1, day).getDay() === sunday,
	);
	if (foundDay) {
		return foundDay;
	}
	return daysInMonth;
}

/**
 * @param {number} year
 */
export function* iterateYearDates(year) {
	const startTimeStamp = new Date(year, 0, 1, 12, 0, 0, 0).getTime();
	for (let d = 0; d < 366; d++) {
		const date = new Date(startTimeStamp + dayMs * d);

		/** @type {PlainDate} */
		const plainDate = {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate(),
		};
		if (plainDate.year !== year) {
			break;
		}

		yield plainDate;
	}
}

/**
 * @param {Date | PlainDate} date
 */
export function getDayOfYear(date) {
	if (date instanceof Date) {
		return daysDiff(new Date(date.getFullYear(), 0, 1), date);
	}

	return daysDiff(new Date(date.year, 0, 1), toDate(date));
}

/**
 * @typedef PlainDate
 * @prop {number} year
 * @prop {number} month
 * @prop {number} day
 */
