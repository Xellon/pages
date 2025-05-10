// @ts-check
import { daysDiff, getDayOfYear, isHoliday, iterateYearDates, toDate } from "./dates.js";
import { Schedule } from "./schedule.js";

/**
 * @typedef GenOptions
 * @prop {number[]} years
 */

/**
 * @param {User} user 
 * @param {GenOptions} options 
 */
export function *generate(user, options) {
    for (const year of options.years) {
        yield generateYear(user, year);
    }
} 

/**
 * @param {User} user 
 * @param {number} year
 * @returns {Schedule}
 */
function generateYear(user, year) {
    /** @type {import("./dates").PlainDate} */
    const startDate = { year, month: 1, day: 1};
    const schedule = new Schedule(year);

    let currentMorning0Day = getDayInCycle(startDate, user.morning_start_date, 12);
    let currentEvening0Day = getDayInCycle(startDate, user.evening_start_date, 12);

    for (const date of iterateYearDates(year)) {
        const dayOfYear = getDayOfYear(date);
        if (currentMorning0Day < 4) {
            schedule.setDayType(dayOfYear, "morning");
        }
        if (currentEvening0Day < 4) {
            schedule.setDayType(dayOfYear, "evening");
        }
        if (isHoliday(date)) {
            schedule.setHoliday(dayOfYear, true);
        }

        currentMorning0Day = (currentMorning0Day + 1) % 12;
        currentEvening0Day = (currentEvening0Day + 1) % 12;
    }

    return schedule;
}

/**
 * @param {import("./dates").PlainDate} startDate 
 * @param {import("./dates").PlainDate} cycleStartDate 
 * @param {number} cycleDuration
 * @returns {number}
 */
function getDayInCycle(startDate, cycleStartDate, cycleDuration) {
    const diff = daysDiff(toDate(cycleStartDate), toDate(startDate));

    return ((diff % cycleDuration) + cycleDuration) % cycleDuration;
}
