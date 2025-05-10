// @ts-check
import { getDayOfYear, getDaysInMonth } from "./dates.js";
import { Month } from "./month.js";
import { range } from "./utils.js";

export class Schedule {
	/** @type {number} */
	#year;
	/** @type {Map<number, import("./month.js").DayMetadata>} */
	#days;

	constructor(/** @type {number} */ year) {
		this.#year = year;
		this.#days = new Map();
	}

	get year() {
		return this.#year;
	}

	/**
	 * @param {number} day 
	 */
	#getDayMetadata(day) {
		if (!this.#days.has(day)){
			this.#days.set(day, {dayType: null, isHoliday: false});
		}
		return this.#days.get(day);
	}

	/**
	 * @param {number} day 
	 * @param {import("./month.js").DayType} dayType 
	 */
	setDayType(day, dayType) {
		const metadata = this.#getDayMetadata(day);
		if (metadata) {
			metadata.dayType = dayType;
		}
	}

	/**
	 * @param {number} day 
	 * @param {boolean} isHoliday 
	 */
	setHoliday(day, isHoliday) {
		const metadata = this.#getDayMetadata(day);
		if (metadata) {
			metadata.isHoliday = isHoliday;
		}
	}

	*months() {
		for (let i = 0; i < 12; i++) {
			const daysInMonth = getDaysInMonth(this.#year, i);
			const days = [
				...range(1, daysInMonth + 1).map((day) => this.#monthDay(day, i)),
			];
			yield new Month(this.#year, i, days);
		}
	}

	/**
	 * @param {number} dayOfMonth
	 * @param {number} month
	 * @returns {import("./month.js").MonthDay}
	 */
	#monthDay(dayOfMonth, month) {
		const day = getDayOfYear(new Date(this.#year, month, dayOfMonth));
		const metadata = this.#days.get(day);

		if (!metadata) {
			return { day: dayOfMonth, metadata: { dayType: null, isHoliday: false } };
		}

		return {
			day: dayOfMonth,
			metadata,
		};
	}
}
