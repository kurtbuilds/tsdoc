import {DateTime} from "luxon"

export function next_day_time(date: DateTime, timezone: string, hour: number): DateTime {
    date = date.setZone(timezone).set({hour: hour, minute: 0, second: 0, millisecond: 0})
    if (date < DateTime.now()) {
        date = date.plus({days: 1})
    }
    return date
}