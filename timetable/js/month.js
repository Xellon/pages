//@ts-check
import { sunday } from "./dates.js";

/** @typedef {"morning" | "evening"} DayType */
/**
 * @typedef DayMetadata
 * @property {DayType?} dayType
 * @property {boolean} isHoliday
 */
/**
 * @typedef MonthDay
 * @property {number} day
 * @property {DayMetadata} metadata
 */

export class Month {
	/** @type {number} */
	#year;
	/** @type {number} */
	#month;
	/** @type {MonthDay[]} */
	#days;

	/**
	 * @param {number} year
	 * @param {number} month
	 * @param {MonthDay[]} days
	 */
	constructor(year, month, days) {
		this.#year = year;
		this.#month = month;
		this.#days = days;
	}

	get month() {
		return this.#month;
	}

	get days() {
		return this.#days;
	}

	get name() {
		switch (this.#month + 1) {
			case 1:
				return "Sausis";
			case 2:
				return "Vasaris";
			case 3:
				return "Kovas";
			case 4:
				return "Balandis";
			case 5:
				return "Gegužė";
			case 6:
				return "Birželis";
			case 7:
				return "Liepa";
			case 8:
				return "Rugpjūtis";
			case 9:
				return "Rugsėjis";
			case 10:
				return "Spalis";
			case 11:
				return "Lapkritis";
			case 12:
				return "Gruodis";
			default:
				return "";
		}
	}

	*toMatrix() {
		/** @type {Array<MonthDay?>} */
		let row = [null, null, null, null, null, null, null];
		for (const day of this.#days) {
			const date = new Date(this.#year, this.#month, day.day);
			const weekday = date.getDay();
			const index = (weekday + 6) % 7;

			row[index] = day;

			if (weekday === sunday) {
				yield row;
				row = [];
			}
		}
		if (row.some((i) => i)) {
			yield row;
		}
	}
}

